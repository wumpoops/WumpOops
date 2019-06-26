import { error } from '../logger/logger';
import fs from 'fs';

class Database {
  constructor() {
    const raw = fs.readFileSync('players.json');
    this.players = raw ? JSON.parse(raw) : new Map() ;
  }

  playedBefore(id) {
    if(this.players[id]) {
      return true;
    }
    return false;
  }

  getPlayer(id) {
    return this.players[id];
  }

  updatePlayer(id, data) {
    this.players[id] = data;
    this.save();
  }

  deletePlayer(id) {
    delete this.players[id];
    this.save();
  }

  getPlayerCount() {
    return this.players.size;
  }

  save() {
    fs.writeFileSync('players.json', JSON.stringify(this.players));
  }

}

export default new Database();
