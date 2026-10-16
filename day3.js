function profit(buyPrice, sellPrice) {
  return sellPrice - buyPrice;
}

const trade1 = profit(60000, 97500);
const trade2 = profit(3200, 2500);

console.log("Trade 1: $" + trade1);
console.log("Trade 2: $" + trade2);

if (trade1 > 0) {
  console.log("Trade 1 was a win!");
} else {
  console.log("Trade 1 was a loss.");
}

if (trade2 > 0) {
  console.log("Trade 2 was a win!");
} else {
  console.log("Trade 2 was a loss.");}

  const trade3 = profit(150, 210);
console.log("Trade 3: $" + trade3);
if (trade3 > 0) {
console.log("Trade 3 was a win!");
} else {
console.log("Trade 3 was a loss.");
}