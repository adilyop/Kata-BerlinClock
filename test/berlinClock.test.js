const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const BerlinClock = require('../app/berlinClock');
const HourConverter = require('../app/hourConverter');
const MinuteConverter = require('../app/minuteConverter');
const SecondConverter = require('../app/secondConverter');

describe('BerlinClock Kata Test: \n', () => {
    let saveHour, saveMinute, saveSecond;
    afterEach(function() {
        saveHour.restore();
        saveMinute.restore();
        saveSecond.restore();
    });
    it('should return valid clock when input is 00:00:00 - use minute/second/hour mock', () => {
        let berlinClock = new BerlinClock('00:00:00');
        saveSecond = sinon.stub(SecondConverter.prototype, 'convertSeconds').callsFake(() => {
            return ['Y']
        })
        saveMinute = sinon.stub(MinuteConverter.prototype, 'convertMinutes').callsFake(() => {
            return ['OOOOOOOOOOO', 'OOOO']
        })
        saveHour = sinon.stub(HourConverter.prototype, 'convertHours').callsFake(() => {
            return ['OOOO', 'OOOO']
        })
        expect(berlinClock.convertClock()).to.equal('Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');
    });
    it('should return valid clock when input is  13:17:01 - use minute/second/hour mock', () => {
        let berlinClock = new BerlinClock('13:17:01');
        sinon.stub(SecondConverter.prototype, 'convertSeconds').callsFake(() => {
            return ['O']
        })
        sinon.stub(MinuteConverter.prototype, 'convertMinutes').callsFake(() => {
            return ['YYROOOOOOOO', 'YYOO']
        })
        sinon.stub(HourConverter.prototype, 'convertHours').callsFake(() => {
            return ['RROO', 'RRRO']
        })
        expect(berlinClock.convertClock()).to.equal('O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO'
        );
    });
});