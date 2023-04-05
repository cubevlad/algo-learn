const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const sequence = file_content.split(/[\n\r]+/);

class Deque {
    result = ''
    deque = []

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
                case 'push_front': {
                    this.deque.unshift(value)
                    this.result += 'ok\n'
                    break;
                }

                case 'push_back': {
                    this.deque.push(value)
                    this.result += 'ok\n'
                    break;
                }

                case 'pop_front': {
                    if (!this.deque.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.deque.shift()
                    this.result += `${el}\n`
                    break;
                }


                case 'pop_back': {
                    if (!this.deque.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.deque.pop()
                    this.result += `${el}\n`
                    break;
                }

                case 'front': {
                    if (!this.deque.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.deque[0]
                    this.result += `${el}\n`
                    break
                }

                case 'back': {
                    if (!this.deque.length) {
                        this.result += 'error\n'
                        break;
                    }

                    const el = this.deque[this.deque.length - 1]
                    this.result += `${el}\n`
                    break
                }

                case 'size': {
                    const size = this.deque.length
                    this.result += `${size}\n`
                    break
                }
                case 'clear': {
                    this.deque.length = 0
                    this.result += `ok\n`
                }
            }
        }
    }

    get result () {
        return this.result
    }
}

const res = new Deque(sequence);
fs.writeFileSync('output.txt', res.result.toString());
