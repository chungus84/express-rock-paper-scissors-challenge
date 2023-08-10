import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../app.js';

chai.use(chaiHttp);

describe(`/game route tests`, () => {

    describe(`POST request for game`, () => {

        it(`should send a players name to game`, async () => {

            // Arrange
            const player1 = { name: `TestName1`, getName() { return `TestName 1` } };

            // Act
            const res = await chai.request(server)
                .post(`/game`)
                .send(player1);

            // Assert
            expect(res).to.have.status(200);
            expect(res.text).to.contain(`Select Your Move`);
        });
    });

})
