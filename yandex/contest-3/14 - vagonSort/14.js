const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const [wagons, wagonsSequence] = file_content.split(/[\n\r]+/);

const check = (wagonsAmount, values) => {
    if (!values.length) {
        return 'NO'
    }

    const stack = []
    const temp = []
    const sequence = values.split(' ').map(v => Number(v))
    let num = 1
    let condition = true

    for (let val of sequence) {
        if (stack.length > 0 && val > stack[stack.length - 1]) {
            condition = false
            break
        }

        temp.push(1)
        stack.push(val)

        while (stack.length > 0 && stack[stack.length - 1] === num) {
            temp.push(2)
            stack.pop()
            num += 1
        }
    }

    if (condition) {
        let val = temp.pop()
        let count = 1

        while (stack.length > 0) {
            if (temp[0] === val) {
                count += 1
            } else {
                val = temp[0]
                count = 1
            }
            temp.pop()
        }
    }

    return condition ? 'YES' : 'NO'
}

const res = check(wagons, wagonsSequence);
fs.writeFileSync('output.txt', res.toString());
