import Game from '../src/game.js';
import { expect } from 'chai';

describe(`Game Tests`, () => {
    it(`should create an instance of game`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        //Act
        const testGame = new Game();
        testGame.setPlayers(mockPlayer, mockComputer);

        //Assert
        expect(testGame).be.instanceOf(Game);
    });
    it(`should set game singlePlayer variable to be true`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();
        testGame.setPlayers(mockPlayer, mockComputer);

        // Act
        testGame.setSinglePLayer(`single`);

        // Assert
        expect(testGame.getSinglePlayer()).to.true;
    })

    it(`should set game singlePlayer variable to be false`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();
        testGame.setPlayers(mockPlayer, mockComputer);

        // Act
        testGame.setSinglePLayer(`multi`);

        // Assert
        expect(testGame.getSinglePlayer()).to.false;
    });

    it(`should set the hardMode (incl. spock and lizard) to true`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();
        testGame.setPlayers(mockPlayer, mockComputer);

        // Act
        testGame.setHardMode(`hard`);

        //Assert
        expect(testGame.getHardMode()).to.true;


    })

    it(`should set the hardMode (incl. spock and lizard) to false`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();

        // Act
        testGame.setPlayers(mockPlayer, mockComputer);
        testGame.setHardMode(`standard`);

        //Assert
        expect(testGame.getHardMode()).to.false;


    })
    it(`determineWinner should determine who won between two players`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `scissors` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();

        // Act
        testGame.setPlayers(mockPlayer, mockComputer);
        const result = testGame.determineWinner();

        // Assert
        expect(result).to.equal(`TestPlayer wins, scissors beats paper`);

    });
    it(`should determine player2 (computer) wins this game`, () => {
        // Arrange
        const mockPlayer = {
            getMove() { return `rock` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `paper` },
            getName() { return `Computer` }
        };

        const testGame = new Game();

        // Act
        testGame.setPlayers(mockPlayer, mockComputer)
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`Computer wins, paper beats rock`);
    });

    it(`should determine the result to be a draw`, () => {
        // Arrange
        const mockPlayer = {
            getMove() { return `rock` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `rock` },
            getName() { return `Computer` }
        };
        const testGame = new Game();

        // Act
        testGame.setPlayers(mockPlayer, mockComputer);
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`Draw`);

    })
    it(`should determine the result to be a draw`, () => {

        // Arrange
        const mockPlayer = {
            getMove() { return `lizard` },
            getName() { return `TestPlayer` }
        };

        const mockComputer = {
            getMove() { return `spock` },
            getName() { return `Computer` }
        };
        const testGame = new Game();

        // Act
        testGame.setPlayers(mockPlayer, mockComputer);
        const result = testGame.determineWinner();

        //Assert
        expect(result).to.equal(`TestPlayer wins, lizard beats spock`);
    })
})
