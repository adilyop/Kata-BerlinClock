class HourConverter {
    constructor(time) {
        this.time = time;
    }
     convertHours() {
        let fiveHourLine = Math.floor(this.time / 5);
        let oneHourLine = this.time % 5;
        const resultFirstLine = 'R'.repeat(fiveHourLine) + 'O'.repeat(4 - fiveHourLine);
        const resultSecondLine = 'R'.repeat(oneHourLine) + 'O'.repeat(4 - oneHourLine);
        return [resultFirstLine, resultSecondLine]
    }
}

module.exports = HourConverter;