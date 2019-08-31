import { Player } from './Player'
import { Round } from './Round'

export class Game {
  constructor(players, gameData) {
    this.round = {};
    this.players = players;
    this.roundNum = 1;
    this.gameData = gameData;
  }
  generateGame() {
    this.players = this.players.map(player => new Player(player))
    this.round = new Round(this.roundNum, this.getRoundData())
    this.round.createGameBoard()
  }
  getRoundData() {
    // return specifc round data with gameData
  }
}