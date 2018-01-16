const HourConverter = require('../app/hourConverter');
const MinuteConverter = require('../app/minuteConverter');
const SecondConverter = require('../app/secondConverter');
class berlinClock {

    constructor(clock) {
        this.clock = clock;
    }

    convertClock() {
        let clockTab = this.clock.split(':');
        let hourConverter = new HourConverter(clockTab[0]);
        let minuteConverter = new MinuteConverter(clockTab[1]);
        let secondConverter = new SecondConverter(clockTab[2]);
        const secondsTab = secondConverter.convertSeconds();
        const minutesTab = minuteConverter.convertMinutes();
        const hoursTab = hourConverter.convertHours();
        const result = secondsTab[0] + '\n' + hoursTab[0] + '\n' + hoursTab[1] + 
        '\n' + minutesTab[0] + '\n' + minutesTab[1] ;
        return result;
    }
}

module.exports = berlinClock;