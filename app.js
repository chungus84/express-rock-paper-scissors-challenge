import express from 'express';
import dotenv from 'dotenv'
import { indexRouter } from './routes/index.js';
import { gameRouter } from './routes/game.js';
import { resultsRouter } from './routes/results.js';
import { multiplayerGame } from './routes/multiplayergame.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });


const host = process.env.HOST;
const port = process.env.PORT;

console.log(port);
app.set('view engine', 'ejs');

app.use(express.static("public"))
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/results', resultsRouter);
app.use('/multiplayergame', multiplayerGame)



const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
})


export { app as server };
