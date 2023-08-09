import { expect } from "chai";
import { getHandMoves } from "../src/helpers.js"

describe('Test helper functions', () => {
    it('should return all 5 handMoves if hardMode is true', () => {
        const mockHardMode = true;
        const mockHandMoves = {
            rock: "rock",
            paper: "paper",
            scissors: "scissors",
            lizard: "lizard",
            spock: "spock"
        }

        const possibleHandMoves = getHandMoves(mockHardMode, mockHandMoves)

        expect(JSON.stringify(possibleHandMoves) === JSON.stringify(mockHandMoves)).to.true;
    });
    it('should return 3 handMoves if hardMode is false', () => {
        const mockHardMode = false;
        const mockHandMoves = {
            rock: "rock",
            paper: "paper",
            scissors: "scissors",
            lizard: "lizard",
            spock: "spock"
        }

        const expectedHandMoves = {
            rock: "rock",
            paper: "paper",
            scissors: "scissors",
        }

        const possibleHandMoves = getHandMoves(mockHardMode, mockHandMoves)

        expect(JSON.stringify(possibleHandMoves) === JSON.stringify(expectedHandMoves)).to.true;
    });
})
