import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';
import { handMove } from '../src/handMove.js';


const router = express.Router();

router.post('/', (req, res) => {

    const player1 = new HumanPlayer(req.body.player1)

    const player2 = new HumanPlayer(req.body.player2)
    const currentGame = new Game(player1, player2);
    req.app.locals.game = currentGame
    // req.app.locals.player1 = player1;
    // req.app.locals.player2 = player2
    // console.log(req.app.locals.game);



    res.redirect('multiplayergame1');

});


router.get('/', (req, res) => {
    const currentGame = req.app.locals.game;
    // const player2 = req.app.locals.player2;
    // console.log(player1);
    // console.log(player2);
    console.log(currentGame);

    res.render('multiplayergame1', {
        game: currentGame,

    })
})

export { router as multiplayerGame1 }
