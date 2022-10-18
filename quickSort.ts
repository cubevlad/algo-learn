/**
 * Quick sort
 */
const f = <T>(a: T[]): T[] => {
  if (a.length < 2) return a;
  else {
    let pivot = a[0];
    let less: T[] = [];
    let greater: T[] = [];
    for (let i = 1; i < a.length; i++) {
      if (a[i] <= pivot) less.push(a[i]);
      else greater.push(a[i]);
    }
    return [...f(less), pivot, ...f(greater)];
  }
};

console.log(f([6, 5, 1, 7, 12]));
