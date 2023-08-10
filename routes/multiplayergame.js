import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';
import { handMove } from '../src/handMove.js';


const router = express.Router();

router.post('/', (req, res) => {

    const currentGame = req.app.locals.game;
    const possibleMoves = req.app.locals.moves;
    currentGame.player1.setMove(req.body.radiobtn);
    req.app.locals.game = currentGame
    // req.app.locals.player1 = player1;
    // req.app.locals.player2 = player2
    // console.log(req.app.locals.game);



    res.redirect('multiplayergame');

});


router.get('/', (req, res) => {
    const currentGame = req.app.locals.game;
    const possibleMoves = req.app.locals.moves;
    // const player2 = req.app.locals.player2;
    // console.log(player1);
    // console.log(player2);
    // console.log(currentGame);

    res.render('multiplayergame', {
        game: currentGame,
        moves: Object.values(possibleMoves)

    })
})

export { router as multiplayerGame }
