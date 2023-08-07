import Game from '../src/game.js';
import { expect } from 'chai';

describe('Game Tests', () => {
    it('should create an instance of game', () => {
        // Arrange
        const mockPlayer = {
            getMove() { return "scissors" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            getMove() { return "paper" },
            getName() { return "Computer" }
        }
        //Act
        const testGame = new Game(mockPlayer, mockComputer);
        //Assert
        expect(testGame).be.instanceOf(Game);
    })
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
    it('should determine player2 (computer) wins this game', () => {
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
    });

    it('should determine the result to be a draw', () => {
        // Arrange
        const mockPlayer = {
            getMove() { return "rock" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            getMove() { return "rock" },
            getName() { return "Computer" }
        }
        const testGame = new Game(mockPlayer, mockComputer);

        // Act
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`Draw`);
    })
    it('should determine the result to be a draw', () => {
        // Arrange
        const mockPlayer = {
            getMove() { return "lizard" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            getMove() { return "spock" },
            getName() { return "Computer" }
        }
        const testGame = new Game(mockPlayer, mockComputer);

        // Act
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`TestPlayer wins, lizard beats spock`);
    })
})
