const recursionFunction = (i: number): string => {
  console.log(i);
  return i <= 0 ? 'Done' : recursionFunction(i - 1);
};

// recursionFunction(10);

const countFactorial = (f: number): number => (f > 1 ? f * countFactorial(f - 1) : 1);
/*
  stack:
  f = 5 -> func(f = 4);
    f = 4 -> func (f = 3);
      f = 3 -> func (f = 2);
       f = 2 -> func (f = 1);
        f = 1 -> return 1

        return: 1 * 2 * 3 * 4 * 5
*/

console.log(countFactorial(5)); // 120
