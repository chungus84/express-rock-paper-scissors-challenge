import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';
import Computer from '../src/computer.js';
import { handMove } from '../src/handMove.js';
import { getHandMoves, setUpGame } from '../src/helpers.js';


const router = express.Router();

router.post('/', (req, res) => {

    const currentGame = setUpGame(new Game(), req.body.playerModeBtn, req.body.gameModeBtn)
    const possibleMoves = getHandMoves(currentGame.getHardMode(), handMove);
    const player1 = new HumanPlayer(req.body.player1)
    const player2 = req.body.player2 ? new HumanPlayer(req.body.player2) : new Computer("Computer");
    currentGame.setPlayers(player1, player2)

    req.app.locals.moves = possibleMoves;
    req.app.locals.game = currentGame;

    res.redirect('/game');
});


router.get('/', (req, res) => {
    const currentGame = req.app.locals.game;
    const possibleMoves = req.app.locals.moves;
    // console.log(player.player1);

    res.render('game', {
        game: currentGame,
        moves: Object.values(possibleMoves)

    })
})

export { router as gameRouter }
