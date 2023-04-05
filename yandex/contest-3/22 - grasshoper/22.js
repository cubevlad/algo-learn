const fs = require("fs");

const file_content = fs.readFileSync("input.txt", { encoding: "utf-8" });
const [_n, _k] = file_content.split(" ");

const calculateJumpVariations = (n, k) => {
  const dp = Array.from({ length: n }, () => 0);

  let i;
  dp[1] = 1;
  dp[2] = 1;

  for (i = 3; i <= k; i++) {
    dp[i] = 2 * dp[i - 1];
  }

  for (; i <= n; i++) {
    dp[i] = 2 * dp[i - 1] - dp[i - k - 1];
  }

  return dp[n];
};

const res = calculateJumpVariations(Number(_n), Number(_k));
fs.writeFileSync("output.txt", res.toString());
