class Hour {
    constructor(time) {
        this.time = time;
    }
     convertHours() {
        let firstLine = Math.floor(this.time / 5);
        let secondLine = this.time % 5;
        return 'R'.repeat(firstLine) + 'O'.repeat(4 - firstLine) + 
        '\n' + 'R'.repeat(secondLine) + 'O'.repeat(4 - secondLine);
    }
}

module.exports = Hour;