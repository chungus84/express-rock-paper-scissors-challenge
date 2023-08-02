import { expect } from "chai";
import Player from '../src/player.js'

describe('Player Test', () => {
    it('should create an instance of player', () => {
        const testPlayer = new Player('Test');
        expect(testPlayer).instanceOf(Player);

    })
})
