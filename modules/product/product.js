let product = {
  coke: {
    _id: 1,
    productName: "coke",
    price: 20,
    quantity: 10,
  },
  pepsi: {
    _id: 2,
    productName: "pepsi",
    price: 25,
    quantity: 10,
  },
  dew: {
    _id: 3,
    productName: "dew",
    price: 30,
    quantity: 10,
  },
};

let products = {};

products.checkTender = (productPrice, tender, quantity) => {
  if (productPrice * quantity > tender) {
    return true;
  } else {
    return false;
  }
};

products.checkStock = (productQuantity, quantity) => {
  if (productQuantity >= quantity) {
    return true;
  } else {
    return false;
  }
};

products.productQuantityDecrement = (
  productName,
  availableQuantity,
  quantity
) => {
  product[productName].quantity = availableQuantity - quantity;
  return product[productName].quantity;
};

products.productQuantityIncrement = (
  productName,
  availableQuantity,
  quantity
) => {
  product[productName].quantity = availableQuantity + quantity;
  return product[productName].quantity;
};

module.exports = { product, products };
