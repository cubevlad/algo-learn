const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const values = file_content.split(/[\n\r]+/);

class Stack {
    result = ''
    values = []

    constructor(str) {
        this.parseString(str)
    }

    parseString = (str) => {
        for (let i = 0; i < str.length; i++) {
            const [command, value] = str[i].split(' ')

            if (command === 'exit') {
                this.result += `bye\n`
                return
            }

            switch (command) {
                case 'push': {
                    this.values.push(value)
                    this.result += `ok\n`
                    break
                }
                case 'pop': {
                    if (!this.values.length) {
                        this.result += 'error\n'
                        break
                    }

                    this.result += `${this.values.pop()}\n`
                    break
                }
                case 'back': {
                    if (!this.values.length) {
                        this.result += 'error\n'
                        break
                    }

                    this.result += `${this.values[this.values.length - 1]}\n`
                    break
                }
                case 'size': {
                    this.result += `${this.values.length}\n`
                    break
                }
                case 'clear': {
                    this.values = []
                    this.result += `ok\n`
                    break
                }
                default: {
                    break
                }
            }
        }
    }
}

const res = new Stack(values);
fs.writeFileSync('output.txt', res.result.toString());
