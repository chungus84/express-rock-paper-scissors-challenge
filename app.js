import dotenv from 'dotenv'
import Player from './src/player.js';
import { handMove } from './src/handMove.js';
import Computer from './src/computer.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const host = process.env.HOST;

// console.log(host);

const player = new Player("Dave");
player.setMove(handMove.Scissors);
// console.log(player.getMove());

const computer = new Computer();
computer.setMove(handMove);
// console.log(computer.getMove());
// console.log(computer.getMove() === 'scissors');

const resultMap = {
    "rock": ["scissors"],
    "paper": ["rock"],
    "scissors": ["paper"],
}

const resultHandler = (player1, player2, resultsMap) => {

    console.log(player1.getMove());
    console.log(player2.getMove());
    if (resultsMap[player1.getMove()].includes(player2.getMove())) {
        return `${player1.getName()} wins ${player1.getMove()} beats ${player2.getMove()}`;
    }
    if (resultsMap[player2.getMove()].includes(player1.getMove())) {
        return `${player2.name ? player2.getName() : "Computer"} wins ${player2.getMove()} beats ${player1.getMove()}`;
    }
    return "Draw";
}

console.log(resultHandler(player, computer, resultMap));
