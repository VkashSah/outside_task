const { coins, coin } = require("../../../modules/coin/coins");

//checkCoin test

test("Check availability of coin. Greater than for equal to of available coin", async () => {
  expect(await coins.checkCoin(4)).toBe(true);
});
test("Check availability of coin. Greater than for equal to of available coin", async () => {
  expect(await coins.checkCoin(101)).toBe(false);
});

//coinIncrement test

test("coin increment on sale", async () => {
  expect(await coins.coinIncrement(20)).toBe(120);
});

//coinDecrement test

test("compare return price and quantity", async () => {
  expect(await coins.coinDecrement(20)).toBe(100); // toBe is expected 100 as it is increased by 20.
});

//calculateChange test

test("calculate change or return amount", async () => {
  expect(await coins.calculateChange(20, 100, 2)).toBe(100 - 40);
});

//compareReturnPriceAndQuantity test

test("compare return price and quantity", async () => {
  expect(await coins.compareReturnPriceAndQuantity(25, 2)).toBe(true);
});
test("compare return price and quantity", async () => {
  expect(await coins.compareReturnPriceAndQuantity(25, 8)).toBe(false);
});
