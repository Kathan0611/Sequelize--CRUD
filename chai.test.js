async function loadChai() {
    const chai = await import('chai');
    const expect = chai.expect;
    const { describe, it } = require('mocha');
    const mocha = require('mocha');
    mocha.setup('bdd');
    const request = require('supertest');
    const app = require('../index');
  
    describe("GET /api/v1/products", () => {
        it('should return all products', async () => {
            const res = await request(app).get("/api/v1/products");
            expect(res.statusCode).to.equal(200);
            expect(res.body.length).to.be.greaterThan(0);
        });
    });
   
  }
loadChai();


