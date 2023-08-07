import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.render('singleplayer');
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.body);
})



export { router as singlePlayerRouter }
