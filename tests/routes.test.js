import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../app.js';
import Game from '../src/game.js';

chai.use(chaiHttp);

describe('Testing request on the server', () => {
    // const testServer = chai.request(server);


    describe('POST request from singleplayer', () => {

        it('should send a players name to game', async () => {
            const req = {
                body: {
                    player1: "TestName1",
                    player2: "TestName2"
                }
            };

            const res = await chai.request(server)
                .post('/game')
                .send(req);


            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');

            // expect(res.body).to.have.property(`player1`);
        })
    })
    describe('GET request for index', () => {
        it('should render index', async () => {

            const res = await chai.request(server).get('/').send();

            expect(res).to.have.status(200);
            expect(res.text).to.contains('Please select what mode you want to play')
        });
    });

    describe('GET request for results route', () => {
        beforeEach(() => {
            const testGame = new Game()
            testGame.setHardMode('standard');
            testGame.setSinglePLayer('single')
            const testPlayer1 = { name: "Test1", move: "paper" }
            const testPlayer2 = { name: "Computer", move: "rock" }
            testGame.setPlayers(testPlayer1, testPlayer2);
            server.locals.game = testGame;
        })
        it('should render results', async () => {
            const req = {
                body: {
                    result: "result",
                }
            }
            // console.log(req);

            const res = await chai.request(server).get('/results').send(req);
            console.log(server.locals);
            console.log(req);
            expect(res).to.have.status(200);

        });
    });
    describe('POST request for results route', () => {
        beforeEach(() => {
            const testGame = new Game()
            testGame.setHardMode('standard');
            testGame.setSinglePLayer('single')
            const testPlayer1 = { name: "Test1", setMove() { }, getMove() { return "rock" }, getName() { } }
            const testPlayer2 = { name: "Computer", setMove() { }, getMove() { return "paper" }, getName() { return "Computer" } }
            testGame.setPlayers(testPlayer1, testPlayer2);
            server.locals.game = testGame;
        })
        it('should not display results if a player is missing from game', async () => {
            let req = {
                body: { radiobtn: "paper" }
            }


            // console.log(req);
            const res = await chai.request(server).post('/results').send(req);

            console.log(res);
            expect(res).to.have.status(200);
            expect(res.text).to.contain('Computer wins, paper beats rock')
        })
    });
    describe('POST request for results route', () => {
        beforeEach(() => {
            const testGame = new Game()
            testGame.setHardMode('standard');
            testGame.setSinglePLayer('multi')
            const testPlayer1 = { name: "Test1", setMove() { }, getMove() { return "rock" }, getName() { } }
            const testPlayer2 = { name: "Test2", setMove() { }, getMove() { return "paper" }, getName() { return "Test2" } }
            testGame.setPlayers(testPlayer1, testPlayer2);
            server.locals.game = testGame;
        })
        it('should not display results if a player is missing from game', async () => {
            let req = {
                body: { radiobtn: "paper" }
            }


            // console.log(req);
            const res = await chai.request(server).post('/results').send(req);

            console.log(res);
            expect(res).to.have.status(200);
            expect(res.text).to.contain('Computer wins, paper beats rock')
        })
    });


    describe('GET request for multiplayer route', () => {
        beforeEach(() => {
            const testGame = new Game()
            testGame.setHardMode('standard');
            testGame.setSinglePLayer('single')
            const testPlayer1 = { name: "Test1" }
            const testPlayer2 = { name: "Test2" }
            testGame.setPlayers(testPlayer1, testPlayer2);
            server.locals.game = testGame;
        })
        it('should render multiplayer', async () => {

            let req = {
                body: { radiobtn: "paper" }
            }


            const res = await chai.request(server).get('/multiplayer').send(req)

            // console.log(res);
            expect(res).to.have.status(200);

        })
    })
})
