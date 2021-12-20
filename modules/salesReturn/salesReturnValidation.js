const salesReturnValidation = {};

salesReturnValidation.validateSaleTransaction = async (req, res, next) => {
  let { productName, tender, quantity } = req.body;
  if (
    productName !== "coke" &&
    productName !== "pepsi" &&
    productName !== "dew"
  ) {
    return res.status(422).json({
      message: `${productName} is invalid. Valid product are coke,pepsi,dew.`,
    });
  }
  if (isNaN(tender)) {
    return res.status(422).json({
      message: `${tender} is invalid. Tender should be in number`,
    });
  }
  if (isNaN(quantity) || quantity < 1) {
    return res.status(422).json({
      message: `${quantity} is invalid. Quantity should be greater than or equal to 1!!!`,
    });
  } else {
    next();
  }
};

salesReturnValidation.validateReturnTransaction = async (req, res, next) => {
  let { productName, quantity } = req.body;
  if (
    productName !== "coke" &&
    productName !== "pepsi" &&
    productName !== "dew"
  ) {
    return res.status(422).json({
      message: `${productName} is invalid. Valid product are coke,pepsi,dew.`,
    });
  }
  if (isNaN(quantity) || quantity < 1) {
    return res.status(422).json({
      message: `${quantity} is invalid. Quantity should be greater than or equal to 1!!!`,
    });
  } else {
    next();
  }
};

module.exports = salesReturnValidation;
