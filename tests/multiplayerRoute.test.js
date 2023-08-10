import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../app.js';
import Game from '../src/game.js';

chai.use(chaiHttp);

describe(`GET request for multiplayer route`, () => {
    beforeEach(() => {
        const testGame = new Game();
        testGame.setHardMode(`standard`);
        testGame.setSinglePLayer(`multi`);
        const testPlayer1 = { name: `Test1` };
        const testPlayer2 = { name: `Test2` };
        testGame.setPlayers(testPlayer1, testPlayer2);
        server.locals.game = testGame;
    });
    it(`should render multiplayer`, async () => {
        // Arrange
        // Act
        const res = await chai.request(server)
            .get(`/multiplayergame`)
            .send();

        // Assert
        expect(res).to.have.status(200);
        expect(res.text).to.contains(`Hi, Test2`);
    });
})
describe(`POST request for multiplayer route`, () => {
    beforeEach(() => {
        const testGame = new Game()
        testGame.setHardMode(`standard`);
        testGame.setSinglePLayer(`multi`);
        const testPlayer1 = { name: `Test1`, setMove() { }, getMove() { return `rock` }, getName() { } };
        const testPlayer2 = { name: `Test2` };
        testGame.setPlayers(testPlayer1, testPlayer2);
        server.locals.game = testGame;
    });
    it(`should render multiplayer`, async () => {
        // Arrange
        const req = {
            body: { radiobtn: `paper` }
        };

        // Act
        const res = await chai.request(server)
            .post(`/multiplayergame`)
            .send(req);
        // Assert
        expect(res).to.have.status(200);
        expect(res.text).to.contains(`Hi, Test2`);

    });
})
