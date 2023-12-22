import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

import chai from 'chai';
chai.use(chaiHttp);

const { request } = chai;

describe('Quote Controller', () => {
  it('should return a random quote', async () => {
    const res = await request(app).get('/quotes/generate');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });
});