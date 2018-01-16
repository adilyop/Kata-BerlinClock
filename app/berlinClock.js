const HourConverter = require('../app/hourConverter');
const MinuteConverter = require('../app/minuteConverter');
const SecondConverter = require('../app/secondConverter');

class berlinClock {

    convertClock(clock) {
        var regex = new RegExp('([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])');
        if (regex.test(clock)) {
            let clockTab = clock.split(':');
            let hourConverter = new HourConverter(clockTab[0]);
            let minuteConverter = new MinuteConverter(clockTab[1]);
            let secondConverter = new SecondConverter(clockTab[2]);
            const secondsTab = secondConverter.convertSeconds();
            const minutesTab = minuteConverter.convertMinutes();
            const hoursTab = hourConverter.convertHours();
            const result = secondsTab[0] + '\n' + hoursTab[0] + '\n' + hoursTab[1] +
                '\n' + minutesTab[0] + '\n' + minutesTab[1];
            return result;
        } else {
            return 'invalid time format'
        }
    }
}

module.exports = berlinClock;