const { coins, coin } = require("../../../modules/coin/coins");
const { products, product } = require("../../../modules/product/product");

//checkCoin test

test("Check tender is enough or not by passing enough tender", async () => {
  expect(await products.checkTender(20, 51, 2)).toBe(false);
});
test("Check tender is enough or not by passing not enough tender", async () => {
  expect(await products.checkTender(25, 49, 2)).toBe(true);
});

//checkStock test

test("Check stock of product is enough or not", async () => {
  expect(await products.checkStock(10, 2)).toBe(true);
});
test("Check stock of product is enough or not", async () => {
  expect(await products.checkStock(1, 2)).toBe(false);
});

//productQuantityDecrement test

test("Decrease quantity of product Sold", async () => {
  expect(await products.productQuantityDecrement("pepsi", 10, 5)).toBe(5);
});

//productQuantityIncrement test

test("Decrease quantity of product Sold", async () => {
  expect(await products.productQuantityIncrement("coke", 10, 5)).toBe(15);
});
