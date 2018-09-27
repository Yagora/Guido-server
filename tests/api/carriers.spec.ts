import app from '../../src/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Request #Carriers', () => {
    it('should return succes true', () => {
        return chai.request(app).get('/carriers')
        .then(res => {
            expect(res.body).to.deep.equal({
                succes: true
            });
      })
    })
});