// simple implementation of binary searching
// the passed array must be sorted
// executes O(logn) === where n - is array length

/* for example
 * arr.length = 128
 * steps for searching = 2 ** n = 128 -> n = 6
 */

const search = (
  searchDistance: number[],
  target: number,
  start = 0,
  end = searchDistance.length - 1,
  n = 0,
): number | string => {
  // Base Condition
  if (start > end) return 'The number does not exist in the array';

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (searchDistance[mid] === target) return n;

  // If element at mid is greater than target,
  // search in the left half of mid
  if (searchDistance[mid] > target) return search(searchDistance, target, start, mid - 1, ++n);
  // If element at mid is smaller than target,
  // search in the right half of mid
  else return search(searchDistance, target, mid + 1, end, ++n);
};

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time('binary search');
search(testArray, 0);
console.timeEnd('binary search');
