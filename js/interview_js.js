"use strict";

// Block 1
const menuIds = ["home", "shop", "cart"];
const handlersA = [];
const handlersB = [];
for (var i = 0; i < menuIds.length; i++) handlersA.push(() => menuIds[i]);
for (let j = 0; j < menuIds.length; j++) handlersB.push(() => menuIds[j]);
console.log("2a:", handlersA.map((f) => f()));
console.log("2b:", handlersB.map((f) => f()));

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

//  Block 3
const user = { name: "Ada", address: { city: "Oslo" }, roles: ["admin"] };
const clone = { ...user };
clone.address.city = "Bergen";
console.log("6a:", user.address.city);

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
