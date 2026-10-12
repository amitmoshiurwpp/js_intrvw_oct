"use strict";

// Block 1
function Vehicle(make) {
  this.make = make;
}
Vehicle.prototype.describe = function () {
  return `${this.make} vehicle`;
};
class Car extends Vehicle {
  describe() {
    return `${this.make} car`;
  }
}
const myCar = new Car("Toyota");
console.log("7a:", myCar.describe());
console.log("7b:", myCar instanceof Vehicle);
console.log("7c:", Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);

//  Block 2
const cart = {
  items: 0,
  addViaArrow: () => {
    return this?.items;
  },
  addItem() {
    return ++this.items;
  },
};
console.log("3a:", cart.addItem());
const add = cart.addItem;
try {
  console.log("3b:", add());
} catch (e) {
  console.log("3b:", e.name);
}

// Block 3
function* retryDelays() {
  let delay = 1;
  while (true) {
    yield delay;
    delay *= 2;
  }
}
const take = (g, n) => Array.from({ length: n }, () => g.next().value);
console.log("9a:", take(retryDelays(), 8));

//  Block 4
const fetchResource = (ms, value) =>
  new Promise((res) => setTimeout(() => res(value), ms));

async function loadDashboardV1() {
  const t = Date.now();
  await fetchResource(50, "profile");
  await fetchResource(50, "orders");
  return Date.now() - t;
}
async function loadDashboardV2() {
  const t = Date.now();
  await Promise.all([fetchResource(50, "profile"), fetchResource(50, "orders")]);
  return Date.now() - t;
}
(async () => {
  console.log("8a:", await loadDashboardV1(), "ms");
  console.log("8b:", await loadDashboardV2(), "ms");
})();

//  Block 5
function createSearchHandler(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
const onSearch = createSearchHandler((query) => console.log("10a:", query), 30);
onSearch("l");
onSearch("la");
onSearch("laptop");
