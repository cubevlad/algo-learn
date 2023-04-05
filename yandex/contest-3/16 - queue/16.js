const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const sequence = file_content.split(/[\n\r]+/);

class Queue {
    result = ''
    queue = []

    constructor(str) {
        this.parseString(str)
    }

    parseString = (str) => {
        for (let i = 0; i < str.length; ++i) {
            const [command, value] = str[i].split(' ')

            if (command === 'exit') {
                this.result += `bye\n`
                return
            }

            switch (command) {
                case 'push': {
                    this.queue.push(value)
                    this.result += 'ok\n'
                    break;
                }
                case 'pop': {
                    if (!this.queue.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.queue.shift()
                    this.result += `${el}\n`
                    break;
                }
                case 'front': {
                    if (!this.queue.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.queue[0]
                    this.result += `${el}\n`
                    break
                }
                case 'size': {
                    const size = this.queue.length
                    this.result += `${size}\n`
                    break
                }
                case 'clear': {
                    this.queue.length = 0
                    this.result += `ok\n`
                }
            }
        }
    }

    get result () {
        return this.result
    }
}

const res = new Queue(sequence);
fs.writeFileSync('output.txt', res.result.toString());
