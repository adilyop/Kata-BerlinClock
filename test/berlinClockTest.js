
const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const BerlinClock = require('../app/berlinClock');

describe('BerlinClock Kata Test: \n', () => {
    it('should return true', (done) => {
        var berlinClock = new BerlinClock('00:00:00');
        berlinClock.convertMinutes = sinon.stub();
        berlinClock.convertHours = sinon.stub();
        berlinClock.convertHours.withArgs('00').returns('OOOO\nOOOO');
        berlinClock.convertMinutes.withArgs('00').returns('OOOOOOOOOOO\nOOOO');
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
        done();
    });
});