class MinuteConverter {
    constructor(time) {
        this.time = time;
    }
    
     convertMinutes() {
        let fiveMinuteLine = Math.floor(this.time / 5);
        let oneMinuteLine = this.time % 5;
        let countRedLamp = Math.floor(this.time / 15);
        let resultFirstLine = 'Y'.repeat(fiveMinuteLine) + 'O'.repeat(11 - fiveMinuteLine); 
        let resultSecondLine =  'Y'.repeat(oneMinuteLine) + 'O'.repeat(4 - oneMinuteLine);
        for (let i = 1; i < countRedLamp + 1; i += 1) {
            const indexRedLamp = i * 3 - 1;
            resultFirstLine = resultFirstLine.substr(0, indexRedLamp) + 'R' + resultFirstLine.substr(indexRedLamp + 1);
        }
        const result = [resultFirstLine, resultSecondLine]
        return result
    }
}

module.exports = MinuteConverter;