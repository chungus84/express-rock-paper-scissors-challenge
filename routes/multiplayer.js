import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('multiplayer')
    console.log(req.body);
});

export { router as multiplayerRouter };
