import { Player } from './Player'
import { Round } from './Round'

export class Game {
  constructor(players) {
    this.round = {};
    this.players = players;
    this.roundNum = 1;
  }
  generateGame() {
    this.players = this.players.map(player => new Player(player))
    this.round = new Round(this.roundNum)
  }
}