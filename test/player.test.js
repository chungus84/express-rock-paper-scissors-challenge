import { expect } from "chai";
import Player from '../src/player.js'

describe('Player Test', () => {
    it('should create an instance of player', () => {
        const testPlayerName = `Test`
        const testPlayer = new Player(testPlayerName);
        expect(testPlayer).instanceOf(Player);


    })
    it('name of player should equal Test', () => {
        const testPlayerName = `Test`
        const testPlayer = new Player(testPlayerName);
        expect(testPlayer.getName()).equal(testPlayerName);

    })
})
