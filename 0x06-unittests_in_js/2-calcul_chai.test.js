const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', () => {
    it('SUM 1.4 and 4.5 output 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
    });
    it('DIVIDE 1.4 by 0 output \'Error\'', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
    });
    it('SUBTRACT 1.4 and 4.5 output -4', () => {
       expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
    });
    it('DIVIDE 1.4 and 4.5 output 0.2', () => {
       expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
    });
});