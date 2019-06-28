import Story from '../story/story';
import DB from '../database/database';
import { log, error, debug } from '../logger/logger';

class Loop {
  constructor() {
    this.queue = [];
    this.getLoopRunning();
  }

  getLoopRunning() {
    (async () => {
      while(true) {
        if(this.queue.length > 0) {
          const ele = this.queue.shift();
          // if check timestamp exceeded execute : push again
          if(ele.timeToSend < Date.now()) {
            this.sendStory(ele.toSend, ele.userId, ele.player, ele.user);
          } else {
            this.addToQueue(ele);
          }
        }
        await this.Sleep(1000);
      }

    })();
  }

  Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  addToQueue(element) {
    this.queue.push(element);
  }

  sendStory(storyId, userId, player, user) {
    const story = Story.getMessage(storyId);
    let m = story.message;
    if(story.choices) {
      m += '\n\n';
      for(const i in story.choices) {
        m += story.choices[i].emoji + ' ' + story.choices[i].message + '\n\n';
      }
    }

    m = m.replace(/{{USERNAME}}/gmi, user.username);
    if(player) {
      m = m.replace(/{{SECONDS}}/gmi, Date.now() - player.lastSend);
    }
    m = m.replace(/{{CURRENT_USERS}}/gmi, DB.getPlayerCount());
    m = m.replace(/{{YEAR}}/gmi, 2019);
    user.send(m).then(async sent => {
      DB.updatePlayer(userId,
        {
          lastMsg: sent.id,
          lastGameMsg: story.id,
          lastSend: Date.now(),
          reacted: false,
        });
      if(story.choices) {
        for(const i in story.choices) {
          await sent.react(story.choices[i].emoji).catch(error);
        }
      }
      if(story.moveTo) {
        // sendStory(story.moveTo, userId, player || DB.getPlayer(userId), user, msg);
        this.addToQueue({
          timeToSend: Date.now() + this.randomTimeInterval(),
          toSend: story.moveTo,
          userId: userId,
          user: user,
          player: player || DB.getPlayer(userId),
        });
      }
    }).catch(error);
  }

  randomTimeInterval(min = 2000, max = 6000) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
  }
}

export default new Loop();
