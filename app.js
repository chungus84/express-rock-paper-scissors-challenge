import express from 'express';
import dotenv from 'dotenv'
import Player from './src/player.js';
import { handMove } from './src/handMove.js';
import Computer from './src/computer.js';
import { indexRouter } from './routes/index.js';
import { singlePlayerRouter } from './routes/singleplayer.js';
import { gameRouter } from './routes/game.js';
import { resultsRouter } from './routes/results.js';
import { multiplayerRouter } from './routes/multiplayer.js';
import { multiplayerGame1 } from './routes/multiplayergame1.js';
import { multiplayerGame2 } from './routes/multiplayergame2.js';
import { multiPlayerResultsRouter } from './routes/multiplayerresults.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });


const host = process.env.HOST;
const port = process.env.PORT;

console.log(port);
app.set('view engine', 'ejs');


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/singleplayer', singlePlayerRouter);
app.use('/multiplayer', multiplayerRouter);
app.use('/game', gameRouter);
app.use('/results', resultsRouter);
app.use('/multiplayergame1', multiplayerGame1)
app.use('/multiplayergame2', multiplayerGame2)
app.use('/multiplayerresults', multiPlayerResultsRouter)


const server = app.listen(port, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
})


export default server;
