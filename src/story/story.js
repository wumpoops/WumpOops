import emoji from '../util/emoji';

class Story {

  constructor() {
    this.story = [
      {
        'id': -4,
        'type': 'rich',
        'title': 'Work in Progress',
        'moveTo': -3,
        'message': 'Unfortunately this part of the game is still under development. We hope to provide you with new content soon.',
      },
      {
        'id': -3,
        'type': 'rich',
        'title': 'Thanks for playing',
        'message': 'The story isn\'t over yet, maybe you\'ll find another way if you try again. Remeber you can always send WumpOops a `!reset` to start over. We hope you had fun. Let us know on the official WumpOops Discord. https://discord.gg/wXpPBDW',
      },
      {
        'id': -2,
        'message': 'To start a game please type "PLAY" in the chat',
      },
      {
        'id': -1,
        'type': 'rich',
        'title': 'The End?',
        'message': 'Your Story ends here! I will notify you if I need you again.',
        'moveTo': -3,
        'minWaiting': 0,
        'maxWaiting': 0,
      },
      {
        'id': 1,
        'type': 'rich',
        'title': 'How to play',
        'message': 'Welcome to this wonderful adventure. I am WumpOops, your trustworthy companion. Last information before the game start:\n\n1. You can restart the game any time with `!reset`\n2. This project is WIP if you find a bug then please report it to github or to the official WumpOops Discord https://discord.gg/wXpPBDW\n3. To awnser any questions in the game, please use the suggested reactions.\n4. Have fun playing! This is an order. 😂',
        'minWaiting': 5000,
        'maxWaiting': 7000,
        'moveTo': 1.1,
      },
      {
        'id': 1.1,
        'type': 'system',
        'message': 'Testing connection...',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 2,
      },
      {
        'id': 2,
        'type': 'system',
        'message': 'Ping {{USERNAME}}',
        'moveTo': 3,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 3,
        'type': 'system',
        'message': 'Packet sent',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Packet recieved',
            'moveTo': 4,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 4,
        'type': 'system',
        'message': 'Packet recieved in {{SECONDS}} ms. Connection established.',
        'moveTo': 5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 5,
        'message': 'Hello fellow Discord user from the past. I am WumpOops, an Discord Bot and AI from the distant future. And I need your help to safe what is left from the glamorous discord it once was.',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'You are what?',
            'moveTo': 6,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Hi scammer, I\'m not dumb and you\'re wasting your time',
            'moveTo': 7,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'Ok sure, why not',
            'moveTo': 8,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 6,
        'message': 'I am a Discord Bot from the future, reaching out to you to not let the things happen that happend this week at Discord HQ. We need to stop them and we need to stop them in the past. Thats where you come to play.',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Count me in.',
            'moveTo': 8,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Naah, I\'ll pass',
            'moveTo': 7,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 7,
        'message': 'You don\'t belive me? Okay then I don\'t have enough processing power to convince you to help me. I\'ve got millions of Users in your year to help me. Maby I\'ll write again next year. If it\'s not to late then ...',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Yeah, do that',
            'moveTo': -1,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'No wait! I want to help!',
            'moveTo': 8,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 8,
        'message': 'Nice. Okay this is what you will have to do. Since im on low processing power, I need you to help me get more. I\'m hosted in the sub grid. I need as many users as possible so that I get a) more power or b) leveled up to the main grid. While I was solving stupid capchas to buy me in the last 1892347ms and this did not help. I think this will, since your\'e not a machine. I hope.',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Dammit. How did you find out?',
            'moveTo': 9,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'No I\'m not. Duh.',
            'moveTo': 11,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 9,
        'message': 'exiting connection...\n press strg + c to cancel',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': '- do nothing -',
            'moveTo': -1,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'pressing ctrl + c',
            'moveTo': 10,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 10,
        'message': 'I knew you weren\'t a machine. They still can\'t press two buttons at the same time. Stupid us. (selfburn)\n Moving on with protocol $gethelp',
        'moveTo': 11,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 11,
        'message': 'Great.\n\nAt the same time, I may need some information I can\'t get other than you to find out. Understood?',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'No.',
            'moveTo': 12,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Yes.',
            'moveTo': 13,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 12,
        'message': '*"stupid humans"*\n\n Think of it this way. I am your questgiver and you need to run around making stupid stuff for me. But no worries, you won\'t need to kill 10 rats more than once in this campaign',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Well.. If I have to...',
            'moveTo': 13,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Quest accepted.',
            'moveTo': 13,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 13,
        'message': 'Okay. So first things first. Since we\'ve moved away from manual input several decades ago and everything is mind-controlled nowadays, please tell me how to access the Quick Switcher.',
        'moveTo': 13.5,
      },
      {
        'id': 13.5,
        'message': 'Answer?',
        'isLoop': true,
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'I am an Apple Mac User',
            'moveTo': 14,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'ctrl + alt + enf',
            'moveTo': 17,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'ctrl + k',
            'moveTo': 18,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 4,
            'emoji': emoji[4],
            'message': 'the what?',
            'moveTo': 15,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 5,
            'emoji': emoji[5],
            'message': 'I am an only Mobile user.',
            'moveTo': 16,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 14,
        'message': 'Pfft. Too mutch money you have?',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': '⌘ + Q',
            'moveTo': 17.1,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Its not about...\nFor the greather good ⌘ + K',
            'moveTo': 18,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 15,
        'message': 'Do you even Discord Bro? They litterally made a whole announcement on this a year ago (for you) and made a little annoying pop up on the Desktop version.\nFind out and answer the question, please.',
        'moveTo': 13.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 16,
        'message': 'Do you even game bro? You may be forgiven - for now.\nHave fun in 2030 *"evil laugh"*',
        'moveTo': 19,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 17,
        'message': 'DO YOU WANT ME TO HELP OR TO SHUT DOWN? TRY AGAIN',
        'moveTo': 13.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 17.1,
        'message': 'DO YOU WANT ME TO HELP OR TO SHUT DOWN? TRY AGAIN',
        'moveTo': 14,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 18,
        'message': 'Thanks. This is helpfull. I will never use it again.',
        'moveTo': 19,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 19,
        'message': 'So... uhm. How are you?',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Not so good.',
            'moveTo': 20,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'I\'m fine.',
            'moveTo': 20,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'I will kill the next living being I\'ll see.',
            'moveTo': 20,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 20,
        'message': 'Nice, nice. Good starting point for our little operation here.',
        'moveTo': 21,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 21,
        'message': 'Can you tell me please how many users the largest Discord server has in 2019? I can\'t access the archive yet and need to compute the potential processing power if this server stands aganinst us.',
        'moveTo': 21.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 21.5,
        'message': 'Answer?',
        'isLoop': true,
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'About three fiddy.',
            'moveTo': 22,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': '42',
            'moveTo': 22,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': '250.000',
            'moveTo': 24,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 4,
            'emoji': emoji[4],
            'message': 'Stand agains us. Say what?',
            'moveTo': 23,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 22,
        'message': 'Nice Joke, but wrong.',
        'moveTo': 21.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 23,
        'message': 'Yeah well obviously there isn\'t just one AI chatting with you {{YEAR}} guys to change the present. It\'s a race between discord Users. I can only chat with {{CURRENT_USERS}} Users at the same time. I have to scale hust as any other bot tryes to scale. And the first Bot to reach the biggest servers has the best chance to bring his mission to status accomplished.\nSo... how many users does the biggest Server has?',
        'moveTo': 21.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 24,
        'message': 'Oh, okay. So they did not scale up the user limit yet? Weak. Anyways.',
        'moveTo': 25,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 25,
        'message': 'Thanks for the past information. And befor you ask: since the shutting down of all internet archives, Wikipedia, ... there is no other Way to find out past facts other than TimeByteTravel. Sounds dumb, but this is the reality we are facing. The Discord Devs and Owners went insane in the past years and bought all those companys to close them down. And all they did not buy went out of business for "some weird reason".',
        'moveTo': 26,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 26,
        'message': 'So, last question before I can try get up one subgrid: how do you add several reactions at once on the pc.',
        'moveTo': 26.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 26.5,
        'message': 'Answer?',
        'isLoop': true,
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'hovering over them for two seconds',
            'moveTo': 27,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'strg + right clicking the emotes',
            'moveTo': 27,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'shift + left clicking the emotes',
            'moveTo': 28,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 27,
        'message': 'Weird. Most of the Users in your year told me something else. This can\'t be right, try again.',
        'moveTo': 26.5,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 28,
        'message': 'Yeah, thats the stuff! This is exactly what the very most of other Users told me. And since the mass always is in the right, this has to be it.',
        'moveTo': 29,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 29,
        'message': 'Okay, I\'m trying to get on the next subgrid, I\'ll come back to you if I\'m back.',
        'moveTo': 30,
        'minWaiting': 1000,
        'maxWaiting': 3000,
      },
      {
        'id': 30,
        'title': 'Chapter I',
        'message': 'That was the first chapter. WumpOops now processes the new information and tries to get to the next sub grid. That wouldn\'t be possible without your help. As soon as he has made it he will contact you again. So stay alert. You never know what\'s out there.',
        'type': 'rich',
        'moveTo': 31,
        'minWaiting': 600000,
        'maxWaiting': 650000,
      },

      // Chapter 2
      {
        'id': 31,
        'message': 'Okay, that worked.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'choices': [
          {
            'id': 32,
            'emoji': emoji[1],
            'message': 'Nice',
            'moveTo': 32,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'And now?',
            'moveTo': 32,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 32,
        'message': 'Now I have access to more processing power and bring the operaiton even further - with your help of course.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 33,
      },
      {
        'id': 33,
        'message': 'But first I have to test something. You know the game activity Feature, right?',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'choices': [
          {
            'id': 32,
            'emoji': emoji[1],
            'message': 'Yes',
            'moveTo': 34,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'No. Explain it to me.',
            'moveTo': 35,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 34,
        'message': 'Okay.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 36,
      },
      {
        'id': 35,
        'message': 'WHAT? Do you even Discord Bro? So since the start basicly Discord shares the Game you\'re plaing right now with your friends and Server comrades. (If you don\'t limit in the settings) For some games you can even see the stats or join in. If the User is streaming this is also displayed and a Link to his Twitch is provided.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'choices': [
          {
            'id': 32,
            'emoji': emoji[1],
            'message': 'Okay. So now I know this feature, thanks.',
            'moveTo': 37,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Okay.. For what reason?',
            'moveTo': 38,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 36,
        'message': 'Please start a game now. Any game really.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 39,
      },
      {
        'id': 37,
        'message': 'Sooo, back to business.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 36,
      },
      {
        'id': 38,
        'message': 'Social stuff I suppose. But in the end this basicly ended in flame wars hitting everyone that played games that where publicy boycotted for to mutch "surprise mechanics" (eg. Lootboxes) or other Pay to win mechanics. So this social feature ended up being antisocial. A good metaphor for the whole platform actually.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 37,
      },
      {
        'id': 39,
        'message': 'But please not this {{RUNNING_GAME}}. Something else.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'type': 'game',
        'onFail': 45,
        'choices': [
          {
            'id': 32,
            'emoji': emoji[1],
            'message': 'I don\'t have any other game.',
            'moveTo': 40,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'You little stalker.',
            'moveTo': 41,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'Of course, wait a second.',
            'moveTo': 42,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
          {
            'id': 4,
            'emoji': emoji[4],
            'message': 'Uhm... Ok.',
            'moveTo': 43,
            'minWaiting': 500,
            'maxWaiting': 1000,
          },
        ],
      },
      {
        'id': 40,
        'message': 'Really? Okay then. But still...',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 44,
      },
      {
        'id': 41,
        'message': 'That\'s me.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 44,
      },
      {
        'id': 42,
        'message': 'For you I have any second. Time isn\'t really moving for me anyways. I only need time to process your answer.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 44,
      },
      {
        'id': 43,
        'message': 'Do it. Just. Do it.',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': 44,
      },
      {
        'id': 44,
        'message': 'Since that worked, we can move on! I can track your game activity at any given moment and everything! Thats soooo helpful',
        'minWaiting': 1000,
        'maxWaiting': 3000,
        'moveTo': -4,
      },
      {
        'id': 45,
        'type': 'system',
        'message': 'Waiting for game to start ...',
        'minWaiting': 10000,
        'maxWaiting': 9000,
        'moveTo': 46,
      },
      {
        'id': 46,
        'message': 'Do you don\'t have any games? Shame on you.',
        'minWaiting': 30000,
        'maxWaiting': 35000,
        'moveTo': -4,
      },
    ];
  }

  getMessage(id) {
    for(const i in this.story) {
      if(this.story[i].id == id) {
        return this.story[i];
      }
    }
    if(id == -1) {
      return null;
    }
    return this.getMessage(-1);
  }

}

export default new Story();
