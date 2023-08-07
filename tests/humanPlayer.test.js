import { expect } from "chai";
import HumanPlayer from '../src/humanPlayer.js'

describe('Player Test', () => {
    it('should create an instance of player', () => {
        const testPlayerName = `Test`
        const testPlayer = new HumanPlayer(testPlayerName);
        expect(testPlayer).instanceOf(HumanPlayer);


    });

    it('name of player should equal Test', () => {
        const testPlayerName = `Test`
        const testPlayer = new HumanPlayer(testPlayerName);
        expect(testPlayer.getName()).equal(testPlayerName);

    });

    it('should be able to select a handMove using function setMove', () => {

        const mockHandMove = Object.freeze({
            Rock: 'rock',

        });
        const testPlayerName = `Test`
        const testPlayer = new HumanPlayer(testPlayerName);
        testPlayer.setMove(mockHandMove.Rock);

        expect(testPlayer.getMove()).equal(mockHandMove.Rock);

    })
})
