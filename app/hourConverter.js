class HourConverter {

    constructor(time) {
        this.time = time;
    }

    convertHours() {
        var regex = new RegExp('([0-1][0-9]|2[0-3])');
        if (!regex.test(this.time)) {
            throw new Error("invalid hour format");
        }
        let fiveHourLine = Math.floor(this.time / 5);
        let oneHourLine = this.time % 5;
        const resultFirstLine = 'R'.repeat(fiveHourLine) + 'O'.repeat(4 - fiveHourLine);
        const resultSecondLine = 'R'.repeat(oneHourLine) + 'O'.repeat(4 - oneHourLine);
        return [resultFirstLine, resultSecondLine]
    }
}

module.exports = HourConverter;