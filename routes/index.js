const express = require("express");
const router = express.Router();
const productController = require("./../modules/product/productController");
const salesReturnController = require("./../modules/salesReturn/salesReturnController");
const salesReturnValidation = require("./../modules/salesReturn/salesReturnValidation");

/*
To Get List of Product
------------------------------------------------------
*/

router.get("/", productController.getProduct); // To Home page

/*
For Sales or return
------------------------------------------------------
*/

router.post(
  "/sale",
  salesReturnValidation.validateSaleTransaction,
  salesReturnController.saleTransaction
);

router.post(
  "/return",
  salesReturnValidation.validateReturnTransaction,
  salesReturnController.returnTransaction
);

module.exports = router;
