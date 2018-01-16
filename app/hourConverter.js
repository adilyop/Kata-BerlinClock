class HourConverter {

    constructor(time) {
        this.time = time;
    }

    convertHours() {
        var regex = new RegExp('([0-1][0-9]|2[0-3])');
        if (regex.test(this.time)) {
            let fiveHourLine = Math.floor(this.time / 5);
            let oneHourLine = this.time % 5;
            const resultFirstLine = 'R'.repeat(fiveHourLine) + 'O'.repeat(4 - fiveHourLine);
            const resultSecondLine = 'R'.repeat(oneHourLine) + 'O'.repeat(4 - oneHourLine);
            return [resultFirstLine, resultSecondLine]
        } else { 
            return 'invalid hour format' 
        }
    }

}

module.exports = HourConverter;