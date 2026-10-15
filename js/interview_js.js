"use strict";

// Block 1
const sessionCache = {};
const userA = { id: 1 };
const userB = { id: 2 };
sessionCache[userA] = "Alice";
sessionCache[userB] = "Bob";
console.log("15a:", sessionCache[userA]);
console.log("15b:", Object.keys(sessionCache));
const sessionMap = new Map([
  [userA, "Alice"],
  [userB, "Bob"],
]);
console.log("15c:", sessionMap.get(userA), sessionMap.size);

// Block 2
const prices = [100, 25, 3, 1000];
const sortedPrices = prices.sort();
console.log("12a:", sortedPrices);
console.log("12b:", sortedPrices === prices);
console.log("12c:", [...prices].sort((a, b) => a - b));

// Block 3
const prefs = { volume: 0, nickname: "", timeout: null };
console.log("14a:", prefs.volume || 50, prefs.volume ?? 50);
console.log("14b:", prefs.nickname || "Guest", prefs.nickname ?? "Guest");
console.log("14c:", prefs.timeout ?? 3000, prefs.retries ?? 3);
console.log("14d:", prefs.theme?.color);

// Block 4
const appSettings = Object.freeze({ theme: "dark", flags: { beta: false } });
try {
  appSettings.theme = "light";
} catch (e) {
  console.log("11a:", e.name);
}
appSettings.flags.beta = true;
console.log("11b:", appSettings.theme, appSettings.flags.beta);

// Block 5
console.log("5a:", [] + []);
console.log("5b:", [] + {});
const total = 0.1 + 0.2;
console.log("5c:", total === 0.3);
const tags = ["php", "js", "go"];
console.log("5d:", tags == "php,js,go");
console.log("5e:", null == undefined, null === undefined);
