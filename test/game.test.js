import Game from '../src/game.js';
import { expect } from 'chai';

describe('Game Tests', () => {
    it('determineWinner should determine who won between two players', () => {
        const mockPlayer = {
            name: "TestPlayer",
            move: "scissors",
            getMove() { return "scissors" },
            getName() { return "TestPlayer" }
        }

        const mockComputer = {
            name: "Computer",
            move: "paper",
            getMove() { return "paper" },
            getName() { return "Computer" }
        }

        const testGame = new Game(mockPlayer, mockComputer);
        const result = testGame.determineWinner();

        expect(result).to.equal(`TestPlayer wins, scissors beats paper`);

    })
})
