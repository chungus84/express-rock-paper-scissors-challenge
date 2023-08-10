import { expect } from 'chai';
import Computer from '../src/computer.js'

describe(`Computer player Test`, () => {
    it(`should create and instance of computer class`, () => {
        // Arrange
        // Act
        const computer = new Computer();
        // Assert
        expect(computer).instanceOf(Computer);
    });

    it(`setMove should set the computers move using random`, () => {

        // Arrange
        const mockHandMove = {
            rock: `rock`,
            paper: `paper`
        };
        const computer = new Computer();

        // Act
        computer.setMove(mockHandMove);

        // Arrange
        expect(Object.values(mockHandMove).includes(computer.getMove())).to.true;

    })
})
