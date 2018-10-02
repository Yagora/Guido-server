import app from '../../server/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Request #Carriers', () => {
    it('should return succes true', () => {
        return chai.request(app).get('/carriers')
        .then(res => {
            expect(res.body).to.deep.equal([{ _id: '5bad6940bc1a4b49c9bf7d1e',
            firstName: 'toto',
            lastName: 'titi',
            created_date: '2018-09-27T23:35:28.526Z',
            __v: 0 }]);
      })
    })
});