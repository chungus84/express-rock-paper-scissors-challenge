import express from 'express';
import Computer from '../src/computer.js';

const router = express.Router();

router.post('/', (req, res) => {

    const currentGame = req.app.locals.game
    const possibleMoves = req.app.locals.moves
    currentGame.getSinglePlayer() ? currentGame.player1.setMove(req.body.radiobtn) : currentGame.player2.setMove(req.body.radiobtn)
    if (currentGame.player2.name === "Computer") { currentGame.player2.setMove(possibleMoves) }
    const result = currentGame.determineWinner();
    req.app.locals.result = result

    res.redirect('/results');

});

router.get('/', (req, res) => {
    const result = req.app.locals.result;

    res.render('results', {
        result: result
    })

})

export { router as resultsRouter }
