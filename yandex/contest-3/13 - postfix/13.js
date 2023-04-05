const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const values = file_content.replace(/[\n\r]+/, '');

const parsePostfix = (values) => {
    if (!values.length) {
        return false
    }

    const symbols = values.split(' ')
    const stack = []

    for (let i = 0; i < symbols.length; i++) {
        const cur = symbols[i]
        const isNumber = !!(cur && !isNaN(cur))

        if (isNumber) {
            stack.push(+cur)
            continue;
        }

        const last = stack.pop()
        const last_1 = stack.pop()

        switch (cur) {
            case '*': {
                stack.push(last * last_1)
                break
            }
            case '+': {
                stack.push(last + last_1)
                break
            }
            case '-': {
                stack.push(last_1 - last)
                break
            }
        }
    }

    return stack.join('')
}

const res = parsePostfix(values);
fs.writeFileSync('output.txt', res.toString());
