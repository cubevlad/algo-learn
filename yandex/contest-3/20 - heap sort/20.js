const fs = require("fs");

const file_content = fs.readFileSync("input.txt", { encoding: "utf-8" });
const [n, list] = file_content.split(/[\n\r]+/);

class Heap {
  constructor(_n, str) {
    this.heap_list = [];

    this._parseString(str);
  }

  _parseString = (str) => {
    this.heap_list = str.split(" ").map((el) => Number(el));
    this._sort(this.heap_list);
  };

  _sort = (arr) => {
    let n = arr.length;
    let k = Math.floor(n / 2 - 1);

    // Построение кучи (перегруппируем массив)
    for (let i = k; i >= 0; i--) {
      this._heapify(arr, n, i);
    }
    // Один за другим извлекаем элементы из кучи
    for (let i = n - 1; i >= 0; i--) {
      // Перемещаем текущий корень в конец
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // Вызываем процедуру heapify на уменьшенной куче
      this._heapify(arr, i, 0);
    }
  };

  _heapify = (arr, n, i) => {
    let largest = i; // Инициализируем наибольший элемент как корень
    let l = 2 * i + 1; // левый = 2*i + 1
    let r = 2 * i + 2; // правый = 2*i + 2

    // Если левый дочерний элемент больше корня
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    // Если самый большой элемент не корень
    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Рекурсивно преобразуем в двоичную кучу затронутое поддерево
      this._heapify(arr, n, largest);
    }
  };
}

const { heap_list } = new Heap(Number(n), list);
const res = heap_list.join(" ");
fs.writeFileSync("output.txt", res);
