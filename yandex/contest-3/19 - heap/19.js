const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8' });
const [n, ...list] = file_content.split(/[\n\r]+/);

class Heap {
  constructor(_n, str) {
    this.heap_list = [];
    this.resultString = '';

    this.parseString(_n, str);
  }

  parseString = (_n, str) => {
    for (let i = 0; i < _n; i++) {
      const [command, value] = str[i].split(' ');

      switch (command) {
        case '0': {
          this.push_heap(Number(value));
          break;
        }
        case '1': {
          this.extract_heap();
          break;
        }
      }
    }
  };

  push_heap = (k) => {
    this.heap_list[this.heap_list.length] = k;

    this.heapifyUp();
  };

  heapifyUp = () => {
    let currentIndex = this.heap_list.length - 1;

    while (this.heap_list[currentIndex] > this.heap_list[this.getParentIndex(currentIndex)]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      currentIndex = this.getParentIndex(currentIndex);
    }
  };

  extract_heap = () => {
    const max = this.heap_list[0];
    this.heap_list[0] = this.heap_list[this.heap_list.length - 1];
    this.heap_list.length--;
    this.resultString += `${max}\n`;

    this.heapifyDown();
  };

  heapifyDown = () => {
    let currentIndex = 0;

    while (this.heap_list[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.heap_list[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.heap_list[this.getRightChildIndex(currentIndex)] >
          this.heap_list[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap_list[currentIndex] < this.heap_list[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);

        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  };

  getParentIndex = (i) => {
    return Math.floor((i - 1) / 2);
  };

  getLeftChildIndex = (i) => {
    return i * 2 + 1;
  };

  getRightChildIndex = (i) => {
    return i * 2 + 2;
  };

  swap = (i1, i2) => {
    const temp = this.heap_list[i1];
    this.heap_list[i1] = this.heap_list[i2];
    this.heap_list[i2] = temp;
  };
}

const { resultString } = new Heap(Number(n), list);
fs.writeFileSync('output.txt', resultString);
