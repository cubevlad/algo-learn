const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const sequence = file_content.split(/[\n\r]+/);

const findWinner = (seq) => {
    const [ first, second ] = seq.map(_seq => _seq.split(' '));

    let n = 0;

    while (first.length > 0 && second.length > 0) {
        n += 1;
        let [a, b] = [first.shift(), second.shift()];

        if (a > b && ([b, a] !== ["0", "9"]) || ([a, b] === ["0", "9"])) {
            first.push(a, b);
        } else {
            second.push(a, b);
        }

        if (n === 1_000_000) {
            return "botva";
            break;
        }
    }

    if (first.length) {
        return `first ${n}`
    }

    return `second ${n}`
}

const res = findWinner(sequence);
fs.writeFileSync('output.txt', res.toString());
