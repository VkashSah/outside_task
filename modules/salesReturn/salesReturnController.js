const salesReturnSchema = require("./salesReturnSchema");
const salesReturnController = {};

salesReturnController.transaction = async (req, res) => {
  try {
    let { productName, price, quantity, transactionType } = req.body;
    const newTransaction = new salesReturnSchema({
      productName,
      price,
      quantity,
      transactionType,
    });
    const transaction = await newTransaction.save();
    return res
      .status(201)
      .json({ transaction, message: `Product ${transactionType} success!!!` });
  } catch (err) {
    return res.status(500).json({ err, message: "Internal Server error!" });
  }
};

module.exports = salesReturnController;
