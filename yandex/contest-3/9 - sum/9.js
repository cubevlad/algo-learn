const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});

const values = file_content.split(/[\n\r]+/);

const getSum = (values) => {
    const [n, m, k] = values[0].split(' ').map(val => Number(val))
    const matrix = values.slice(1, n + 1).map(val => val.split(' ').map(v => Number(v)))
    const prefix = Array.from( {length: n}, () =>
         Array.from({ length: m}, () => 0)
    )

    const preCalc = (() => {
        prefix[0][0] = matrix[0][0];

        for (let i = 1; i < n; i++) {
            prefix[i][0] = prefix[i - 1][0] + matrix[i][0];
        }

        for (let i = 1; i < m; i++) {
            prefix[0][i] = prefix[0][i - 1] + matrix[0][i];
        }

        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + matrix[i][j];
            }
        }
    })()


    const query = (x1, y1, x2, y2) => {
        x1--;
        x2--;
        y1--;
        y2--;
        let first = prefix[x2][y2];
        let second = x1 == 0 ? 0 : prefix[x1 - 1][y2];
        let third = y1 == 0 ? 0 : prefix[x2][y1 - 1];
        let four = x1 == 0 || y1 == 0 ? 0 : prefix[x1 - 1][y1 - 1];
        return first - second - third + four;
    }

    const queriesFrom = values.slice(n + 1, values.length).map(val => val.split(' ').map(v => Number(v)))
    const result = []

    for (let i = 0; i < queriesFrom.length; i++) {
        const queryValues = queriesFrom[i]

        if (queryValues.length > 1) {
            const [x1, y1, x2, y2] = queryValues
            result.push(query(x1, y1, x2, y2))
        }
    }

    return result.join('\n')
}



const res = getSum(values);
fs.writeFileSync('output.txt', res.toString());
