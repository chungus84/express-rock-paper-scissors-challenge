export const getHandMoves = (hardMode, handMoves) => {
    if (hardMode) {
        return handMoves;
    } else {
        const { spock, lizard, ...possibleMoves } = handMoves;
        return possibleMoves
    }
}

export const setUpGame = (game, playMode, gameMode) => {
    const currentGame = game
    currentGame.setSinglePLayer(playMode);
    currentGame.setHardMode(gameMode);
    return currentGame;
}
