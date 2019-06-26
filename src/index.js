import { Client, RichEmbed } from 'discord.js';
import { log, error, debug } from './logger/logger';
import emoji from './util/emoji';
import Story from './story/story';
import DB from './database/database';

import fs from 'fs';
const client = new Client();

// const users = [];

client.on('ready', () => {
  log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    game: {
      name: 'WumpOops',
      type: 'WATCHING',
    },
    status: 'online',
  });
});

// TODO
client.on('guildCreate', guild => {
  debug(`invited in Guild ${guild}`);

  const embed = new RichEmbed().setTitle('Let\'s Play')
    .setColor(0x10F820)
    .setDescription('Hey, my fellow adventurers, if you want to play a game? Send me a PM with PLAY and we can get the party started.');
  getDefaultChannel(guild).send(embed);

});

function sendStory(storyId, userId, player, user, msg) {
  const story = Story.getMessage(storyId);
  let m = story.message;
  if(story.choices) {
    m += '\n\n';
    for(const i in story.choices) {
      m += story.choices[i].emoji + ' ' + story.choices[i].message + '\n\n';
    }
  }

  m = m.replace(/{{USERNAME}}/gmi, user.username || msg.author.username);
  if(player) {
    m = m.replace(/{{SECONDS}}/gmi, Date.now() - player.lastSend);
  }
  m = m.replace(/{{CURRENT_USERS}}/gmi, DB.getPlayerCount());
  m = m.replace(/{{YEAR}}/gmi, 2019);
  let sendMessage;
  if(user) {
    sendMessage = user.send(m);

  } else {
    sendMessage = msg.reply(m);
  }
  sendMessage.then(async sent => {
    DB.updatePlayer(userId,
      {
        'lastMsg': sent.id,
        'lastGameMsg': story.id,
        'lastSend': Date.now(),
      });
    if(story.choices) {
      for(const i in story.choices) {
        await sent.react(story.choices[i].emoji).catch(error);
      }
    }
    if(story.moveTo) {
      sendStory(story.moveTo, userId, player || DB.getPlayer(userId), user, msg);
    }
  }).catch(error);
}

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!PLAY'.toLowerCase()) {
    if(DB.playedBefore(msg.author.id)) {
      return;
    }
    client.fetchUser(msg.author.id).then(user => sendStory(1, msg.author.id, false, user, false)).catch(error);

  } else if (msg.channel.type == 'dm' && msg.content.toLowerCase() === '!RESET'.toLowerCase()) {
    if(!DB.playedBefore(msg.author.id)) {
      return;
    }
    DB.deletePlayer(msg.author.id);
    client.fetchUser(msg.author.id).then(user => sendStory(1, msg.author.id, false, user, false)).catch(error);
  }
});

client.on('raw', event => {
  if(event.t == 'MESSAGE_REACTION_ADD') {
    if(event.d.user_id == '592769923340566528') {
      return;
    }
    client.fetchUser(event.d.user_id, true)
      .then(user => {
        if(!DB.playedBefore(event.d.user_id)) {
          // user.send(Story.getMessage(-2).message);
          return;
        }
        const player = DB.getPlayer(event.d.user_id);
        if(event.d.message_id == player.lastMsg) {
          const oldStory = Story.getMessage(player.lastGameMsg);
          if(oldStory.choices) {
            for(const j in oldStory.choices) {
              if(oldStory.choices[j].emoji == event.d.emoji.name) {
                /* let story = Story.getMessage(oldStory.choices[j].moveTo);
                do {
                  let m = story.message;
                  if(story.choices) {
                    m += '\n\n';
                    for(const ii in story.choices) {
                      m += story.choices[ii].emoji + ' ' + story.choices[ii].message + '\n';
                    }
                  }

                  m = m.replace(/{{USERNAME}}/gmi, user.username);
                  m = m.replace(/{{SECONDS}}/gmi, Date.now() - player.lastSend);
                  m = m.replace(/{{CURRENT_USERS}}/gmi, DB.getPlayerCount());
                  m = m.replace(/{{YEAR}}/gmi, 2019);
                  user.send(m).then(sent => {
                    player.lastMsg = sent.id;
                    player.lastGameMsg = oldStory.choices[j].moveTo;
                    DB.updatePlayer(event.d.user_id, player);
                  });
                  if(story.moveTo) {
                    story = Story.getMessage(story.moveTo);
                  } else {
                    story = null;
                  }
                } while(story);*/
                sendStory(oldStory.choices[j].moveTo, event.d.user_id, player, user, false);
                return;
              }
            }
          } else {
            /* let story = Story.getMessage(oldStory.moveTo);
            do {
              let m = story.message;
              if(story.choices) {
                m += '\n\n';
                for(const ii in story.choices) {
                  m += story.choices[ii].emoji + ' ' + story.choices[ii].message + '\n';
                }
              }

              m = m.replace(/{{USERNAME}}/gmi, user.username);
              m = m.replace(/{{SECONDS}}/gmi, Date.now() - player.lastSend);
              m = m.replace(/{{CURRENT_USERS}}/gmi, DB.getPlayerCount());
              m = m.replace(/{{YEAR}}/gmi, 2019);
              user.send(m).then(sent => {
                player.lastMsg = sent.id;
                player.lastGameMsg = story.id;
                DB.updatePlayer(event.d.user_id, player);
              });
              if(story.moveTo) {
                story = Story.getMessage(story.moveTo);
              } else {
                story = null;
              }
            } while(story);*/
            sendStory(oldStory.moveTo, event.d.user_id, player, user, false);
            return;
          }
        }
      }
      )
      .catch(error);
  }
});

client.on('error', msg => {
  error(msg);
});

client.on('debug', msg => {
  // debug(msg);
});

client.on('guildMemberAdd', member => {
  member.send(`Hey ${member}, wanne play a game?`);
});

/* client.on('messageReactionAdd', msg => {
  log(msg);
  // msg.user.send(`U have reacted with ${msg.messageReaction}, wanne play a game?`);
});*/


const getDefaultChannel = (guild) => {
  // get "original" default channel
  if (guild.channels.has(guild.id)) {
    return guild.channels.get(guild.id);
  }

  // Check for a "general" channel, which is often default chat
  const generalChannel = guild.channels.find(channel => channel.name === 'general');
  if (generalChannel) {
    return generalChannel;
  }
  // Now we get into the heavy stuff: first channel in order where the bot can speak
  // hold on to your hats!
  return guild.channels
    .filter(c => c.type === 'text' &&
      c.permissionsFor(guild.client.user).has('SEND_MESSAGES'))
    .sort((a, b) => a.position - b.position ||
      Number.fromString(a.id).sub(Number.fromString(b.id)).toNumber())
    .first();
};

client.login(process.env.WUMPOOPS_TOKEN);
