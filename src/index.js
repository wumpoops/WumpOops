import { Client, RichEmbed } from 'discord.js';
import { log, error, debug } from './logger/logger';
import emoji from './util/emoji';
import Story from './story/story';
import Loop from './loop/loop';
import DB from './database/database';

import fs from 'fs';
const client = new Client();
const LOOP = new Loop(client);

client.on('ready', () => {
  log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    game: {
      name: 'WumpOops',
      type: 'WATCHING',
    },
    status: 'online',
  });
  LOOP.setActive(true);
});

// TODO
client.on('guildCreate', guild => {
  debug(`invited in Guild ${guild}`);

  const embed = new RichEmbed().setTitle('Let\'s Play')
    .setColor(0x10F820)
    .setDescription('Hey, my fellow adventurers, if you want to play a game? Send me a PM with PLAY and we can get the party started.');
  getDefaultChannel(guild).send(embed);

});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '!PLAY'.toLowerCase()) {
    if(DB.playedBefore(msg.author.id)) {
      return;
    }
    client.fetchUser(msg.author.id).then(user => LOOP.addToQueue({
      timeToSend: Date.now(),
      toSend: 1,
      userId: msg.author.id,
    })).catch(error);

  } else if (msg.channel.type == 'dm' && msg.content.toLowerCase() === '!RESET'.toLowerCase()) {
    if(!DB.playedBefore(msg.author.id)) {
      return;
    }
    DB.deletePlayer(msg.author.id);
    client.fetchUser(msg.author.id).then(user => LOOP.addToQueue({
      timeToSend: Date.now(),
      toSend: 1,
      userId: msg.author.id,
    })).catch(error);
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
        if(event.d.message_id == player.lastMsg && !player.reacted) {
          const oldStory = Story.getMessage(player.lastGameMsg);
          if(oldStory.choices) {
            for(const j in oldStory.choices) {
              if(oldStory.choices[j].emoji == event.d.emoji.name) {
                LOOP.addToQueue({
                  timeToSend: Date.now() + LOOP.randomTimeInterval(oldStory.choices[j].minWaiting, oldStory.choices[j].maxWaiting),
                  toSend: oldStory.choices[j].moveTo,
                  userId: event.d.user_id,
                });
                return;
              }
            }
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

client.on('guildMemberAdd', member => {
  member.send(`Hey ${member}, wanne play a game?`);
});

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
