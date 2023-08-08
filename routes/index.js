import express from 'express';
const router = express.Router();

const enableDisableCheckBox = () => {
    let checkYes = document.querySelector('#btnmulti');
    let player2NameField = document.querySelector('#player-2-name-textbox');
    player2NameField.disabled = checkYes.checked ? false : true;
    console.log(player2NameField.disabled);

}

router.get('/', (req, res) => {
    res.render('index');
});

export { router as indexRouter };
