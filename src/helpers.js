export const getHandMoves = (bool, handMoves) => {
    if (bool) {
        return handMoves;
    } else {
        const { Spock, Lizard, ...possibleMoves } = handMoves;
        return possibleMoves
    }
}
