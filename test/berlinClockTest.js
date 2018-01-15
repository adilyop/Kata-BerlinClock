
const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const BerlinClock = require('../app/berlinClock');

describe('BerlinClock Kata Test: \n', () => {
    it('should return true', () => {
        var berlinClock = new BerlinClock('00:00:00');
        berlinClock.convertMinutes = sinon.stub();
        berlinClock.convertMinutes.withArgs('00').returns('OOOOOOOOOOO\nOOOO');
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });

    it('should return value when input is 13:17:01', () => {
        var berlinClock = new BerlinClock('13:17:01');
        berlinClock.convertMinutes = sinon.stub();
        berlinClock.convertMinutes.withArgs('17').returns('YYROOOOOOOO\nYYOO');
        expect(berlinClock.convertClock()).to.equal('O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO'
        );
    });
});