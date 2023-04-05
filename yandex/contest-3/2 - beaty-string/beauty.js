const fs = require('fs');

const file_content = fs.readFileSync('input.txt', 'utf-8');
const [factor, initialString] = file_content.split('\n');

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const createBeauty = (k, str) => {
  let max = 0;
  let chars = str.split('');

  for (let letter of alphabet) {
    let counter = k;
    let right = 0;

    for (let left = 0; left < chars.length; left++) {
      if (left > 0 && chars[left - 1] !== letter) {
        counter++;
      }

      while (counter >= 0) {
        if (letter !== chars[right]) {
          counter--;
        }

        if (counter === -1) {
          counter = 0;
          break;
        }

        right++;

        if (right === chars.length) {
          break;
        }
      }

      const diff = right - left;
      max = Math.max(diff, max);

      if (right === chars.length) {
        break;
      }
    }
  }

  return max;
};
console.log(factor);
console.log(initialString.length);
const result = createBeauty(+factor, initialString);

fs.writeFileSync('output.txt', result.toString());
