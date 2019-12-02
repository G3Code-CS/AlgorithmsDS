class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    // const result = this.data[this.length - 1];
    // delete this.data[this.length - 1];
    // this.length--;
    // return result;
    return this.deleteIndex(this.length - 1);
  }

  getIndex(index) {
    return this.data[index];
  }

  deleteIndex(index) {
    const result = this.getIndex(index);
    this._collapseTo(index);
    return result;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  addIndex(index, value) {
    // Implement this
  }
}

let students = new ArrayList();
students.push("Nivy");
students.push("Niky");
students.push("Gai");
students.push("Mani");
console.log(students);
students.pop();
console.log(students);
students.deleteIndex(1);
console.log(students);
