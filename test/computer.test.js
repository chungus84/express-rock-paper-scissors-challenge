import { expect } from 'chai';
import Computer from '../src/computer.js'

describe('Computer player Test', () => {
    it('should create and instance of computer class', () => {
        const computer = new Computer();
        expect(computer).instanceOf(Computer);
    });
    it('setMove should set the computers move using random', () => {
        const mockHandMove = Object.freeze({
            Rock: 'rock',
            Paper: 'paper'

        });
        const computer = new Computer();
        computer.setMove(mockHandMove);

        expect(Object.values(mockHandMove).includes(computer.getMove())).to.true

    })
})
