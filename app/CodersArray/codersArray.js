class CodersArray {
  length = 0;

  constructor(...inputs) {
    for (const index of inputs) {
      this[this.length] = index;
      this.length++;
    }
  }

  push(item) {
    this.length++;
    this[this.length] = item;
  }

  some(item) {}
}

export default CodersArray;
