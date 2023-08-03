import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';


const router = express.Router();

router.post('/', (req, res) => {
    // console.log(req.body);
    const player = new HumanPlayer(req.body.player1)
    const computer = new Computer("Computer")
    computer.setMove(Game.resultsHash);
    const currentGame = new Game(player, computer);

    req.app.locals.game = currentGame;
    // console.log(req.app.locals.game);


    res.redirect('/game');
});


router.get('/', (req, res) => {
    const player = req.app.locals.game;
    console.log(player.player1);

    res.render('game', {
        name: player.player1,

    })
})

export { router as gameRouter }
