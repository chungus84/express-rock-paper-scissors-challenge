import express from 'express';
import Game from '../src/game.js';
import HumanPlayer from '../src/humanPlayer.js';

const router = express.Router();

router.post('/', (req, res) => {


    const game = req.app.locals.game


    console.log(game)
    // console.log(player1);
    game.player1.setMove(req.body.radiobtn)
    if (game.player2.name != "Computer") { game.player2.setMove(req.body.radiobtn2) }
    console.log(game)
    // console.log(player1.getMove());
    // console.log(`player1 result ${player1.getMove()}`);
    // console.log(`player2 result ${player2.getMove()}`);
    const result = game.determineWinner();
    req.app.locals.result = result

    res.redirect('/results');

});

router.get('/', (req, res) => {
    const result = req.app.locals.result;
    console.log(result);

    res.render('results', {
        result: result
    })

})

export { router as resultsRouter }
