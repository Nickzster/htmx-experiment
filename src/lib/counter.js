class Counter {
  constructor(val) {
    console.log("init", val);
    this.id = val;
    return this;
  }

  getNextID() {
    console.log("next id", this.id + 1);
    this.id += 1;
    return this.id;
  }
}

const counter = new Counter(3);

export { counter };
