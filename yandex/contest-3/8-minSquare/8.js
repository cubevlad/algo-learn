const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});
const values = file_content.split(/[\n\r]+/);

const getCoordinates = (numbers) => {
    const [n, ...rest] = numbers

    const xAxis = []
    const yAxis = []

    for (let i = 0; i < rest.length; ++i) {
        const [x, y] = rest[i].split(' ')
        if (x && y) {
            xAxis.push(Number(x))
            yAxis.push(Number(y))
        }
    }

    const leftDown = [Math.min(...xAxis), Math.min(...yAxis)].join(' ')
    const rightUp = [Math.max(...xAxis), Math.max(...yAxis)].join(' ')

    return `${leftDown} ${rightUp}`
}

const res = getCoordinates(values);
fs.writeFileSync('output.txt', res.toString());
