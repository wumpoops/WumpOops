import Story from '../story/story';
import { RichEmbed } from 'discord.js';
import DB from '../database/database';
import { log, error, debug } from '../logger/logger';
import fs from 'fs';

class Loop {
  constructor(client) {
    this.client = client;

    const raw = fs.readFileSync('queue.json');
    this.queue = raw ? JSON.parse(raw) : [] ;

    this.getLoopRunning();
  }

  getLoopRunning() {
    (async () => {
      while(true) {
        if(this.isActive && this.queue.length > 0) {
          const ele = this.queue.shift();
          // if check timestamp exceeded execute : push again
          if(ele.timeToSend < Date.now()) {
            this.sendStory(ele.toSend, ele.userId, ele.data);
          } else {
            this.addToQueue(ele);
          }
          this.save();
        }
        await this.sleep(500);
      }

    })();
  }
  save() {
    fs.writeFileSync('queue.json', JSON.stringify(this.queue));
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  addToQueue(element) {
    this.queue.push(element);
    this.save();
  }

  setActive(active) {
    this.isActive = active;
  }

  sendStory(storyId, userId, data) {
    this.client.fetchUser(userId).then(user => {
      const player = DB.getPlayer(userId);
      const story = Story.getMessage(storyId);

      let game = 'Nothing';
      if(story.type == 'game') {
        if(user.presence.game) {
          game = user.presence.game.name;
        } else {
          this.addToQueue({
            timeToSend: Date.now(),
            toSend: story.onFail,
            userId: userId,
          });
          return;
        }
      }

      let m = story.message;
      if(story.choices) {
        m += '\n\n';
        for(const i in story.choices) {
          m += story.choices[i].emoji + ' ' + story.choices[i].message + '\n\n';
        }
      }

      m = m.replace(/{{USERNAME}}/gmi, user.username);
      if(data) {
        m = m.replace(/{{RUNNING_GAME}}/gmi, data.game);
      }
      if(story.type == 'game') {
        m = m.replace(/{{RUNNING_GAME}}/gmi, game);
      }
      if(player) {
        m = m.replace(/{{SECONDS}}/gmi, Date.now() - player.lastSend);
      }
      m = m.replace(/{{CURRENT_USERS}}/gmi, DB.getPlayerCount());
      m = m.replace(/{{YEAR}}/gmi, 2019);

      if(story.type == 'rich') {
        m = new RichEmbed().setTitle(story.title || 'Game').setColor('#e36212').setDescription(m);
      } else if (story.type == 'system') {
        m = new RichEmbed().setColor('#204060').setDescription(m);
      }

      user.send(m).then(async sent => {
        DB.updatePlayer(userId,
          {
            lastMsg: sent.id,
            lastGameMsg: story.id,
            lastSend: Date.now(),
            reacted: false,
            // alreadyUsed: [],
          });
        if(story.choices) {
          for(const i in story.choices) {
            await sent.react(story.choices[i].emoji).catch(error);
          }
        }
        if(story.moveTo) {
          // sendStory(story.moveTo, userId, player || DB.getPlayer(userId), user, msg);
          this.addToQueue({
            timeToSend: Date.now() + this.randomTimeInterval(story.minWaiting, story.maxWaiting),
            toSend: story.moveTo,
            userId: userId,
          });
        }
      }).catch(err => {
        error(err);
        this.addToQueue({
          timeToSend: Date.now(),
          toSend: storyId,
          userId: userId,
        });
      });
    }).catch(err => {
      error(err);
      this.addToQueue({
        timeToSend: Date.now(),
        toSend: storyId,
        userId: userId,
      });
    });
  }

  randomTimeInterval(min = 2000, max = 6000) {
    if(min == 0 && max == 0) {
      return 0;
    }
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  }
}

export default Loop;
