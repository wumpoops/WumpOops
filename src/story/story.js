import emoji from '../util/emoji';

class Story {

  constructor() {
    this.story = [
      {
        'id': -2,
        'message': 'To start a game please type "PLAY" in the chat',
      },
      {
        'id': -1,
        'message': 'Your Story ends here! I will notify you if I need you again.',
        'maxWaiting': 3000,
      },
      {
        'id': 1,
        'message': 'Testing connection...',
        'maxWaiting': 3000,
        'moveTo': 2,
      },
      {
        'id': 2,
        'message': 'Ping {{USERNAME}}',
        'moveTo': 3,
      },
      {
        'id': 3,
        'message': 'Packet sent',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Packet recieved',
            'moveTo': 4,
          },
        ],
      },
      {
        'id': 4,
        'message': 'Packet recieved in {{SECONDS}} ms. Connection established.',
        'moveTo': 5,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Hi scammer, I\'m not dumb and you\'re wasing your time',
            'moveTo': 7,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'Ok sure, why not',
            'moveTo': 8,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Naah, I\'ll pass',
            'moveTo': 7,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'No wait! I want to help!',
            'moveTo': 8,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'No I\'m not. Duh.',
            'moveTo': 11,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'pressing ctrl + c',
            'moveTo': 10,
          },
        ],
      },
      {
        'id': 10,
        'message': 'I knew you weren\'t a machine. They still can\'t press two buttons at the same time. Stupid us. (selfburn)\n Moving on with protocol $gethelp',
        'moveTo': 11,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Yes.',
            'moveTo': 13,
          },
        ],
      },
      {
        'id': 12,
        'message': '*stupid humans*\n\n Think of it this way. I am your guestgiver and you need to run around making stupid stuff for me. But no worries, you won\'t need to kill 10 rats more than once in this campaign',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'Welp.. If I have to...',
            'moveTo': 13,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Quest accepted.',
            'moveTo': 13,
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
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'I am an Apple Mac User',
            'moveTo': 14,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'ctrl + alt + enf',
            'moveTo': 17,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'ctrl + k',
            'moveTo': 18,
          },
          {
            'id': 4,
            'emoji': emoji[4],
            'message': 'the what?',
            'moveTo': 15,
          },
          {
            'id': 5,
            'emoji': emoji[5],
            'message': 'I am an only Mobile user.',
            'moveTo': 16,
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
            'moveTo': 17,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'Its not about...\nFor the greather good ⌘ + K',
            'moveTo': 18,
          },
        ],
      },
      {
        'id': 15,
        'message': 'Do you even Discord Bro? They litterally made a whole announcement on this a year ago (for you) and made a little annoying pop up on the Desktop version.\nFind out and answer the question, please.',
        'moveTo': 13.5,
      },
      {
        'id': 16,
        'message': 'Do you even game brp? You may be forgiven - for now.\nHave fun in 2030 *evil laugh*',
        'moveTo': 19,
      },
      {
        'id': 17,
        'message': 'DO YOU WANT ME TO HELP OR TO SHUT DOWN? TRY AGAIN',
        'moveTo': 13.5,
      },
      {
        'id': 18,
        'message': 'Thanks. This is helpfull. I will never use it again.',
        'moveTo': 19,
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
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'I\'m fine.',
            'moveTo': 20,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'I will kill the next living being I\'ll see.',
            'moveTo': 20,
          },
        ],
      },
      {
        'id': 20,
        'message': 'Nice, nice. Good starting point for our little operation here.',
        'moveTo': 21,
      },
      {
        'id': 21,
        'message': 'Can you tell me please how many users the largest Discord server has in 2019? I can\'t access the archive yet and need to compute the potential processing power if this server stands aganinst us.',
        'moveTo': 21.5,
      },
      {
        'id': 21.5,
        'message': 'Answer?',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'About three fiddy.',
            'moveTo': 22,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': '42',
            'moveTo': 22,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': '250.000',
            'moveTo': 24,
          },
          {
            'id': 4,
            'emoji': emoji[4],
            'message': 'Stand agains us. Say what?',
            'moveTo': 23,
          },
        ],
      },
      {
        'id': 22,
        'message': 'Nice Joke, but wrong.',
        'moveTo': 21.5,
      },
      {
        'id': 23,
        'message': 'Yeah well obviously there isn\'t just one AI chatting with you {{YEAR}} guys to change the present. It\'s a race between discord Users. I can only chat with {{CURRENT_USERS}} Users at the same time. I have to scale hust as any other bot tryes to scale. And the first Bot to reach the biggest servers has the best chance to bring his mission to status accomplished.\nSo... how many users does the biggest Server has?',
        'moveTo': 21.5,
      },
      {
        'id': 24,
        'message': 'Oh, okay. So they did not scale up the user limit yet? Weak. Anyways.',
        'moveTo': 25,
      },
      {
        'id': 25,
        'message': 'Thanks for the past information. And befor you ask: since the shutting down of all internet archives, Wikipedia, ... there is no other Way to find out past facts other than TimeByteTravel. Sounds dumb, but this is the reality we are facing. The Discord Devs and Owners went insane in the past years and bought all those companys to close them down. And all they did not buy went out of business for "some weird reason".',
        'moveTo': 26,
      },
      {
        'id': 26,
        'message': 'So, last question before I can try get up one subgrid: how do you add several reactions at once on the pc.',
        'moveTo': 26.5,
      },
      {
        'id': 26.5,
        'message': 'Answer?',
        'choices': [
          {
            'id': 1,
            'emoji': emoji[1],
            'message': 'hovering over them for two seconds',
            'moveTo': 27,
          },
          {
            'id': 2,
            'emoji': emoji[2],
            'message': 'strg + right clicking the emotes',
            'moveTo': 27,
          },
          {
            'id': 3,
            'emoji': emoji[3],
            'message': 'shift + left clicking the emotes',
            'moveTo': 28,
          },
        ],
      },
      {
        'id': 27,
        'message': 'Weird. Most of the Users in your year told me something else. This can\'t be right, try again.',
        'moveTo': 26.5,
      },
      {
        'id': 28,
        'message': 'Yeah, thats the stuff! This is exactly what the very most of other Users told me. And since the mass always is in the right, this has to be it.',
        'moveTo': 29,
      },
      {
        'id': 29,
        'message': 'Okay, I\'m trying to get on the next subgrid, I\'ll come back to you if I\'m back.',
        'moveTo': -1,
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
