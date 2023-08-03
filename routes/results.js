import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const player1 = req.app.locals.game.player1
    const player2 = req.app.locals.game.player2
    const game = req.app.locals.game
    // console.log(player1);
    player1.setMove(req.body.radiobtn);
    console.log(player1.getMove());
    console.log(`player1 result ${player1.getMove()}`);
    console.log(`player2 result ${player2.getMove()}`);
    const result = game.determineWinner();
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
