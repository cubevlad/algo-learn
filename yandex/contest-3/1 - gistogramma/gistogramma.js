const fs = require('fs');

const file_text = fs.readFileSync('input.txt', 'utf-8');

const sortAndReplaceDuplicates = (str) => {
  return [...new Set(str).keys()].sort().join('');
};

const createMap = (str) => {
  return str.split('').reduce((acc, el) => {
    if (!el.trim()) {
      return acc;
    }

    if (!acc[el]) {
      acc[el] = 1;
      return acc;
    }

    acc[el] += 1;
    return acc;
  }, {});
};

const createMatrix = (str, map, max) => {
  const matrix = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    const el = str[i];
    const value = map[el];

    if (!el || !value) {
      continue;
    }

    const hashes = Array.from({ length: max }, () => ' ').fill('#', 0, value);
    matrix.push([el, ...hashes]);
  }

  return matrix;
};

const rotateMatrix = (matrix) => {
  let result = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j].push(matrix[i][j]);
    }
  }
  return result;
};

const createHistogram = (init_str) => {
  const str = sortAndReplaceDuplicates(init_str);
  const map = createMap(init_str);
  const max = Math.max(...Object.values(map));
  const matrix = createMatrix(str, map, max);
  const newMatrix = rotateMatrix(matrix);
  let result = '';
  for (let i = newMatrix.length; i >= 0; --i) {
    if (newMatrix[i]) result = result + (newMatrix[i].reverse().join('') + '\n');
  }
  return result;
};

const histogram = createHistogram(file_text.toString());
fs.writeFileSync('output.txt', histogram.toString());
