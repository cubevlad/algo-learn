const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const values = file_content.replace(/[\n\r]+/, '');

const getLetters = (str) => {
    if (str.length < 1) {
        return;
    }

    const d = {}
    for (let i = 0; i < str.length; i++) {
        const symbol = str[i]
        d[symbol] = (d[symbol] || 0) + (i + 1) * (str.length - i)
    }

    const keys = Object.keys(d).sort()

    let result = ''
    for (let key of keys) {
        result += `${key}: ${d[key]}\n`
    }

    return result
}

const res = getLetters(values);
fs.writeFileSync('output.txt', res.toString());
