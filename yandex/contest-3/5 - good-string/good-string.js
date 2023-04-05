const fs = require('fs');

const file_content = fs.readFileSync('input.txt', 'utf-8');

const [n, ...k] = file_content.split('\n');
const seq = k.map((_k) => Number(_k));

const getStringGoodness = (_n, _seq) => {
  if (_n === 1) {
    return 1;
  }

  let value = 0;

  for (let i = 0; i < seq.length - 1; ++i) {
    value += Math.min(seq[i], seq[i + 1]);
  }

  return value;
};

const result = getStringGoodness(n, seq);
fs.writeFileSync('output.txt', result.toString());
