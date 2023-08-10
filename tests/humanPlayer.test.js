import { expect } from 'chai';
import HumanPlayer from '../src/humanPlayer.js'

describe(`Player Test`, () => {
    it('should create an instance of player', () => {
        // Arrange
        const testPlayerName = `Test`;
        // Act
        const testPlayer = new HumanPlayer(testPlayerName);
        // Assert
        expect(testPlayer).instanceOf(HumanPlayer);


    });

    it(`name of player should equal Test`, () => {
        // Arrange
        const testPlayerName = `Test`;
        // Act
        const testPlayer = new HumanPlayer(testPlayerName);
        // Assert
        expect(testPlayer.getName()).equal(testPlayerName);

    });

    it(`should be able to select a handMove using function setMove`, () => {
        // Arrange
        const mockHandMove = Object.freeze({
            Rock: `rock`,
        });

        const testPlayerName = `Test`;
        // Act
        const testPlayer = new HumanPlayer(testPlayerName);
        testPlayer.setMove(mockHandMove.Rock);
        // Assert
        expect(testPlayer.getMove()).equal(mockHandMove.Rock);

    })
})
