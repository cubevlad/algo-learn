const fs = require('fs');

const file_content = fs.readFileSync('input.txt', 'utf-8');

const [studentsAmount, variants, rowNumber, leftOfRightSeat] = file_content.split('\n');

const findSeat = (n, k, row, column) => {
  const pos1 = (row - 1) * 2 + column - k;
  const pos2 = (row - 1) * 2 + column + k;
  let row1 = Math.floor((pos1 + 1) / 2);
  let row2 = Math.floor((pos2 + 1) / 2);

  const cond1 = pos1 > 0;
  const cond2 = pos2 > n;
  const cond3 = Math.abs(row - row1) < Math.abs(row - row2);

  if (cond1 && (cond2 || cond3)) {
    return `${row1}\n${2 - (pos1 % 2)}`;
  } else if (pos2 <= n) {
    return `${row2}\n${2 - (pos2 % 2)}`;
  } else {
    return -1;
  }
};

const result = findSeat(+studentsAmount, +variants, +rowNumber, +leftOfRightSeat);
fs.writeFileSync('output.txt', result.toString());
