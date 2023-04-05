const fs = require("fs");

const file_content = fs.readFileSync("input.txt", { encoding: "utf-8" });
const n = file_content.replace(/[\n\r]+/, "");

const defineZeroSequences = (_n) => {
  const arr = Array.from({ length: 35 }, () => 0);
  arr[1] = 2;
  arr[2] = 4;
  arr[3] = 7;

  let i = 4;

  while (i <= _n) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    i++;
  }

  return arr[_n];
};

const res = defineZeroSequences(Number(n));
fs.writeFileSync("output.txt", res.toString());
