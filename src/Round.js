import { Board } from './Board'

export class Round {
  constructor(roundNum, roundData) {
    this.turn = 0;
    this.roundNum = roundNum;
    this.gameBoard = {}
    this.roundData = roundData;
  }
  createGameBoard() {
    this.gameBoard = new Board(this.roundData)
    this.gameBoard.sortData()
  }
}