import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';
import { handMove } from '../src/handMove.js';


const router = express.Router();

router.post('/', (req, res) => {
    const player1 = req.app.locals.game.player1

    player1.setMove(req.body.radiobtn);
    console.log(player1);

    res.redirect('/multiplayergame2');

});


router.get('/', (req, res) => {
    const player2 = req.app.locals.player2;


    res.render('multiplayergame2', {
        player2: player2,

    })
})

export { router as multiplayerGame2 }
