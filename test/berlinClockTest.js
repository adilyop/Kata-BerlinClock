const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const BerlinClock = require('../app/berlinClock');
const Hour = require('../app/hour');
const Minute = require('../app/minute');
const Second = require('../app/second');

describe('BerlinClock Kata Test: \n', () => {
    it('should return true', () => {
        var berlinClock = new BerlinClock('00:00:00');
        var hour = new Hour('00');
        var minute = new Minute('00');
        sinon.stub(Second.prototype, 'convertSeconds').callsFake(() => {
            return 'Y'
        })
        sinon.stub(Minute.prototype, 'convertMinutes').callsFake(() => {
            return 'OOOOOOOOOOO\nOOOO'
        })
        sinon.stub(Hour.prototype, 'convertHours').callsFake(() => {
            return 'OOOO\nOOOO'
        })
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });
});