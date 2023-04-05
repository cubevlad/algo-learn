const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const [amount, sequence] = file_content.split(/[\n\r]+/);

const check = (n, values) => {
    const seq = values.split(' ').map(v => Number(v))

    let output = Array.from({ length: n}, () => 0)
    output[-1]  = -1

    let min_cost = seq[seq.length - 1]
    let west_cities = [min_cost]

    for (let i = n - 2 ; i > -1; i--) {
        if (seq[i] <= min_cost) {
            min_cost = seq[i]
            west_cities = [seq[i]]
            output[i] = -1
        } else {
            for (let j = 0; j < west_cities.length; j++) {
                const cost = west_cities[j]
                console.log(west_cities)
                if (cost < seq[i]) {
                    output[i] = i + j + 1
                    break
                }

                west_cities.unshift(seq[i])
            }
        }

    }

    return output
}
console.time('1')
const res = check(amount, sequence);
console.timeEnd('1')
fs.writeFileSync('output.txt', res.toString());
