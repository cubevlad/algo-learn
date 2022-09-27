/*
Implementation of selectivity sort of numbers
*/

// helper function to define min value in passed array
const defineSmallest = <T extends unknown>(arr: T[]): number => {
  let value = arr[0];
  let index = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < value) {
      value = arr[i];
      index = i;
    }
  }

  return index;
};

const sort = <T extends unknown>(arr: T[]): T[] => {
  let newSortedArray: T[] = [];
  const len = arr.length;

  for (let i = 0; i < len; ++i) {
    let index = defineSmallest(arr);
    newSortedArray.push(arr[index]);
    const idx = arr.indexOf(arr[index]);
    arr.splice(idx, 1);
  }

  return newSortedArray;
};

const arr = [3, 7, 12, 1, 2, 6];
console.log('sort method invoked', sort(arr));
