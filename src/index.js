// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { Game } from './Game'


const $startButton = $(".start-game")
const $playerOne = $(".player-one")
const $playerTwo = $(".player-two")
const $playerThree = $(".player-three")
$startButton.click(() => startGame())


let gameData; // Fetch for game data 
let game;

const startGame = () => {
  game = new Game([$playerOne.val(), $playerTwo.val(), $playerThree.val()], gameData)
  game.generateGame()
  console.log(game)
}

