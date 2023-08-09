const enableDisableCheckBox = () => {
    let checkYes = document.querySelector('#btnmulti');
    let player2NameField = document.querySelector('#player-2-name-textbox');
    checkYes.checked ? player2NameField.disabled = false : player2NameField.disabled = true;
}
