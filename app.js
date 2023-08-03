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




console.log(resultHandler(player, computer, resultMap));
