import app from '../../server/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Request #IndexPage', () => {
    it('should return index.html', () => {
        return chai.request(app).get('/')
        .then(res => {
            expect(res.type).to.deep.equal('text/html');
      })
    })
});