import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../app.js';
import Game from '../src/game.js';

chai.use(chaiHttp);

describe('Results routes tests', () => {

    describe('POST request for results route', () => {
        beforeEach(() => {
            const testGame = new Game();
            testGame.setHardMode('standard');
            testGame.setSinglePLayer('multi');
            const testPlayer1 = { name: "Test1", setMove() { }, getMove() { return "rock" }, getName() { } };
            const testPlayer2 = { name: "Test2", setMove() { }, getMove() { return "paper" }, getName() { return "Test2" } };
            testGame.setPlayers(testPlayer1, testPlayer2);
            server.locals.game = testGame;
        });

        it('should should return Test2 wins, paper beats rock', async () => {
            // Arrange
            const req = {
                body: { radiobtn: "paper" }
            };

            // Act
            const res = await chai.request(server).post('/results').send(req);

            // Assert
            expect(res).to.have.status(200);
            expect(res.text).to.contain('Test2 wins, paper beats rock');
        });
    });


});
