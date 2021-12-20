const product = require("./product");
const productController = {};

productController.getProduct = (req, res) => {
  try {
    res
      .status(200)
      .json({
        stockAvailable: product.product,
        message: "Product get success!!!",
      });
  } catch (err) {
    res.status(500).json({ err, error: "Internal server error" });
  }
};

module.exports = productController;
