const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const BerlinClock = require('../app/berlinClock');
const Hour = require('../app/hour');
const Minute = require('../app/minute');
const Second = require('../app/second');

describe('BerlinClock Kata Test: \n', () => {
    var saveHour, saveMinute, saveSecond;
    afterEach(function() {
        saveHour.restore();
        saveMinute.restore();
        saveSecond.restore();
    });
    it('should return valid clock when input is 00:00:00 - use minute/second/hour mock', () => {
        var berlinClock = new BerlinClock('00:00:00');
        saveSecond = sinon.stub(Second.prototype, 'convertSeconds').callsFake(() => {
            return 'Y'
        })
        saveMinute = sinon.stub(Minute.prototype, 'convertMinutes').callsFake(() => {
            return 'OOOOOOOOOOO\nOOOO'
        })
        saveHour = sinon.stub(Hour.prototype, 'convertHours').callsFake(() => {
            return 'OOOO\nOOOO'
        })
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });
    it('should return valid clock when input is  13:17:01 - use minute/second/hour mock', () => {
        var berlinClock = new BerlinClock('13:17:01');
        sinon.stub(Second.prototype, 'convertSeconds').callsFake(() => {
            return 'O'
        })
        sinon.stub(Minute.prototype, 'convertMinutes').callsFake(() => {
            return 'YYROOOOOOOO\nYYOO'
        })
        sinon.stub(Hour.prototype, 'convertHours').callsFake(() => {
            return 'RROO\nRRRO'
        })
        expect(berlinClock.convertClock()).to.equal('O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO'
        );
    });
    it('should return valid clock when input is 00:00:00 - use minute/hour mock', () => {
        var berlinClock = new BerlinClock('00:00:00');
        saveMinute = sinon.stub(Minute.prototype, 'convertMinutes').callsFake(() => {
            return 'OOOOOOOOOOO\nOOOO'
        })
        saveHour = sinon.stub(Hour.prototype, 'convertHours').callsFake(() => {
            return 'OOOO\nOOOO'
        })
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });
});