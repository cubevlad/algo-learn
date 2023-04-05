const fs = require('fs');

const file_content = fs.readFileSync('input.txt', 'utf-8');

const [marksCount, marksNumbers, collectorsCount, pseq] = file_content.split('\n');

const binarySearch = (arr, numb) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  let sum = 0;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (numb === Number(arr[mid])) {
      return mid;
    }

    if (numb < Number(arr[mid])) {
      right = mid - 1;
    } else {
      left = mid + 1;
      sum = mid + 1;
    }
  }

  return sum;
};

const findMarks2 = (m, p) => {
  const seqM = [...new Set(m.split(' ').sort((a, b) => Number(a) - Number(b)))];
  const seqP = p.split(' ');
  let resSeq = '';

  for (let i = 0; i < seqP.length; i++) {
    let collectorValue = Number(seqP[i]);
    resSeq += `${binarySearch(seqM, collectorValue)}\n`;
  }

  return resSeq;
};
console.time('1');
const result2 = findMarks2(marksNumbers, pseq);
console.timeEnd('1');
fs.writeFileSync('output.txt', result2.toString());
