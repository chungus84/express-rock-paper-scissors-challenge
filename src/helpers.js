export const getHandMoves = (hardMode, handMoves) => {
    if (hardMode) {
        return handMoves;
    } else {
        const { spock, lizard, ...possibleMoves } = handMoves;
        return possibleMoves
    }
}
