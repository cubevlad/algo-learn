const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const values = file_content.replace(/[\n\r]+/, '');

const dict = {
    '{': '}',
    '(': ')',
    '[': ']'
}

const isSequenceRight = (values) => {
    if (!values.length) {
        return false
    }

    const stack = []
    for (let i = 0; i < values.length; i++) {
        const current = values[i]
        const closedBracket = dict[current]

        if (closedBracket) {
            stack.push(current)
            continue
        }

        const last = stack.pop()
        if (dict[last] !== current) {
            return 'no'
        }
    }

    return !!stack.length ? 'no' : 'yes'
}

const res = isSequenceRight(values);
fs.writeFileSync('output.txt', res.toString());
