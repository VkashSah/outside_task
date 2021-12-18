const productController = {};

let product = [
  {
    productName: "coke",
    price: 20,
    quantity: 10,
  },
  {
    productName: "pepsi",
    price: 25,
    quantity: 10,
  },
  {
    productName: "dew",
    price: 30,
    quantity: 10,
  },
];

productController.getProduct = (req, res) => {
  try {
    res.status(200).json({ product, message: "Product get success!!!" });
  } catch (err) {
    res.status(500).json({ err, error: "Internal server error" });
  }
};

module.exports = productController;
