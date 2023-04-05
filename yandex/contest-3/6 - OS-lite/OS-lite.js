const fs = require('fs');

const file_content = fs.readFileSync('input.txt', 'utf-8');

const [n, k, ...p] = file_content.split('\n');

const getValues = (_n, _k, _seq) => {
  let count = 0;

  for (let i = 0; i < _seq.length - 1; i++) {
    let [l, r] = _seq[i].split(' ');

    const isIntersects = _seq.slice(i + 1, _seq.length);

    const cond = isIntersects.some((seq) => {
      const [_l, _r] = seq.split(' ');

      return Number(l) <= Number(_r) && Number(_l) <= Number(r);
    });

    if (!cond) {
      count++;
    }
  }

  return count;
};

const result = getValues(+n, +k, p);
fs.writeFileSync('output.txt', result.toString());
