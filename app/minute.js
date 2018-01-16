class Minute {
    constructor(time) {
        this.time = time;
    }
    
     convertMinutes() {
        let firstLine = Math.floor(this.time / 5);
        let secondLine = this.time % 5;
        let quarter = Math.floor(this.time / 15);
        let result = 'Y'.repeat(firstLine) + 'O'.repeat(11 - firstLine) + 
        '\n' + 'Y'.repeat(secondLine) + 'O'.repeat(4 - secondLine);
        for (let i = 1; i < quarter + 1; i += 1) {
            const index = i * 3 - 1;
            result = result.substr(0, index) + 'R' + result.substr(index + 1);
        }
        return result
    }
}

module.exports = Minute;