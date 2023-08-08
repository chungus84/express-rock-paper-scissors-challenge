import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../app.js';


chai.use(chaiHttp);

describe('Testing request on the server', () => {
    const testServer = chai.request(server).keepOpen();


    describe('POST request from singleplayer', () => {

        it('should send a players name to game', async () => {
            const testName = "Test Name";

            const res = await testServer
                .post('/game')
                .send(testName);

            console.log(res.body);
            expect(res).to.have.status(200);
            // expect(res.body).to.have.property(`player1`);
        })
    })
})
