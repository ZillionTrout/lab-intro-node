class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length > 0) {
      let max = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (max < this.items[i]) {
          max = this.items[i];
        }
      }
      return max;
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    }
    throw new Error('EmptySortedList');
  }

  sum() {
  this.sum =this.items.reduce(function(total, current) { 
  return total + current
}, 0)
return this.sum
}

  avg() {
    throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;
