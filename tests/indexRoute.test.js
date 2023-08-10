import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../app.js';

chai.use(chaiHttp);

describe('Tests for index', async () => {
    describe('GET test on index', () => {
        it('should render index', async () => {
            // Arrange
            // Act
            const res = await chai.request(server)
                .get('/')
                .send()

            // Assert
            expect(res.text).to.contain(`Please select what mode you want to play`)
        })
    })
})
