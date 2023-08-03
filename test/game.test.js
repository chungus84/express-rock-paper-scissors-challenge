import Game from '../src/game.js';
import { expect } from 'chai';

describe('Game Tests', () => {
    it('determineWinner should determine who won between two players', () => {
        // Arrange
        const mockPlayer = {
            getMove() { return "scissors" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            getMove() { return "paper" },
            getName() { return "Computer" }
        }

        const testGame = new Game(mockPlayer, mockComputer);

        // Act
        const result = testGame.determineWinner();

        // Assert
        expect(result).to.equal(`TestPlayer wins, scissors beats paper`);

    });
    it('should determin player2 (computer) wins this game', () => {
        // Arrange
        const mockPlayer = {
            getMove() { return "rock" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            getMove() { return "paper" },
            getName() { return "Computer" }
        }

        // console.log(mockPlayer.getMove());
        // console.log(mockComputer.getMove());

        const testGame = new Game(mockPlayer, mockComputer);

        // Act
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`Computer wins, paper beats rock`);
    })

})
