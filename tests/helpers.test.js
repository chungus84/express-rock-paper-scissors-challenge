import { expect } from "chai";
import { getHandMoves } from "../src/helpers.js"

describe(`Test helper functions`, () => {
    it(`getHandMoves should return all 5 handMoves if hardMode is true`, () => {
        // Arrange
        const mockHardMode = true;
        const mockHandMoves = {
            rock: `rock`,
            paper: `paper`,
            scissors: `scissors`,
            lizard: `lizard`,
            spock: `spock`
        };

        // Act
        const possibleHandMoves = getHandMoves(mockHardMode, mockHandMoves);

        // Assert
        expect(JSON.stringify(possibleHandMoves) === JSON.stringify(mockHandMoves)).to.true;
    });
    it(`getHandMoves should return 3 handMoves if hardMode is false`, () => {
        // Arrange
        const mockHardMode = false;
        const mockHandMoves = {
            rock: `rock`,
            paper: `paper`,
            scissors: `scissors`,
            lizard: `lizard`,
            spock: `spock`
        };

        const expectedHandMoves = {
            rock: `rock`,
            paper: `paper`,
            scissors: `scissors`,
        };

        // Act
        const possibleHandMoves = getHandMoves(mockHardMode, mockHandMoves);
        // Assert
        expect(JSON.stringify(possibleHandMoves) === JSON.stringify(expectedHandMoves)).to.true;
    });

})
