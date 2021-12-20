const salesReturnSchema = require("./salesReturnSchema");
let { product, products } = require("../product/product");
let { coin, coins } = require("./../coin/coins");
const salesReturnController = {};

salesReturnController.saleTransaction = async (req, res) => {
  try {
    let { productName, tender, quantity } = req.body;
    let transactionType = "sale";

    const productInfo = product[productName];

    //Check the status of available stock
    const stockStatus = products.checkStock(productInfo.quantity, quantity);
    if (!stockStatus) {
      return res.status(400).json({ message: `Not enough stock` });
    }

    //Check tender paid by user is enough or not for quantity
    const tenderStatus = products.checkTender(
      productInfo.price,
      tender,
      quantity
    );
    if (tenderStatus) {
      return res.status(400).json({ message: `Not enough Tender` });
    }

    //Calculate Change Amount
    const changeAmount = coins.calculateChange(
      productInfo.price,
      tender,
      quantity
    );

    //Check status of available coin in system
    const coinStatus = coins.checkCoin(changeAmount);
    if (!coinStatus) {
      return res
        .status(400)
        .json({ message: `Not enough Coin available for change` });
    }

    //Decrease quantity of product on sale
    products.productQuantityDecrement(
      productInfo.productName,
      productInfo.quantity,
      quantity
    );

    // Calculation of netAmount user have to Pay & System need to return
    const netAmount = productInfo.price * quantity;
    const returnAmount = tender - netAmount;

    //Increase quantity of Coin in system
    coins.coinIncrement(netAmount);

    //Store in DB

    const transaction = await storeInDB(
      productName,
      productInfo.price,
      netAmount,
      tender,
      returnAmount,
      quantity,
      transactionType
    );
    return res
      .status(201)
      .json({ transaction, message: `Product ${transactionType} success!!!` });
  } catch (err) {
    return res.status(500).json({ err, message: "Internal Server error!" });
  }
};

const storeInDB = async (
  productName,
  price,
  netAmount,
  tender,
  returnAmount,
  quantity,
  transactionType
) => {
  const newTransaction = new salesReturnSchema({
    productName,
    price,
    netAmount,
    tender,
    returnAmount,
    quantity,
    transactionType,
  });
  const transaction = await newTransaction.save();
  return transaction;
};

/*For Return Part */

salesReturnController.returnTransaction = async (req, res) => {
  try {
    let { productName, quantity } = req.body;
    let transactionType = "return";
    const productInfo = product[productName];

    // Calculate Return Amount & Compare with available coin
    let data = await coins.compareReturnPriceAndQuantity(
      productInfo.price,
      quantity
    );

    if (data === true) {
      let price = productInfo.price;
      let returnAmount = quantity * price;

      //Increase quantity of product on Return
      products.productQuantityIncrement(
        productInfo.productName,
        productInfo.quantity,
        quantity
      );

      // Store in DB
      const newTransaction = new salesReturnSchema({
        productName,
        price,
        quantity,
        transactionType,
        returnAmount,
      });
      const transaction = await newTransaction.save();

      if (transaction) {
        return res.status(201).json({
          transaction,
          message: `Product ${transactionType} success!!!`,
        });
      } else
        return res.status(500).json({
          message: "Internal Server error!!!",
        });
    } else {
      return res.status(422).json({
        message: `Not enough coin left. Only ${coin} left!!!`,
      });
    }
  } catch (err) {
    return res.status(500).json({ err, message: "Internal Server error!" });
  }
};

module.exports = salesReturnController;
