const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
  it('adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3), 4);
  });
  it('adds two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
});
});