import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';
import { handMove } from '../src/handMove.js';


const router = express.Router();

router.post('/', (req, res) => {
    // console.log(req.body);
    console.log(req.body);
    const player1 = new HumanPlayer(req.body.player1)
    const player2 = req.body.player2 ? new HumanPlayer(req.body.player2) : new Computer("Computer");
    if (player2 instanceof Computer) { player2.setMove(handMove) }
    // console.log(player2.getMove());
    const currentGame = new Game(player1, player2);

    req.app.locals.game = currentGame;
    // console.log(req.app.locals.game);


    res.redirect('/game');

});


router.get('/', (req, res) => {
    const player = req.app.locals.game;
    // console.log(player.player1);

    res.render('game', {
        player1: player.player1,
        player2: player.player2

    })
})

export { router as gameRouter }
