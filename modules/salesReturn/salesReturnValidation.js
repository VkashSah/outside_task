const salesReturnValidation = {};

salesReturnValidation.validateTransaction = async (req, res, next) => {
  let { productName, price, quantity, transactionType } = req.body;
  if (
    productName !== "coke" &&
    productName !== "pepsi" &&
    productName !== "dew"
  ) {
    return res.status(422).json({
      message: `${productName} is invalid. Valid product are coke,pepsi,dew.`,
    });
  }
  if (isNaN(price)) {
    return res.status(422).json({
      message: `${price} is invalid. Price should be in number`,
    });
  }
  if (isNaN(quantity)) {
    return res.status(422).json({
      message: `${quantity} is invalid. Quantity should be in number`,
    });
  }
  if (transactionType !== "sale" && transactionType !== "return") {
    return res.status(422).json({
      message: `${transactionType} is invalid. Valid transactionType are sale,return.`,
    });
  } else {
    next();
  }
};

module.exports = salesReturnValidation;
