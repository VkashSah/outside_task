const mongoose = require("mongoose");
const schema = mongoose.Schema;

const salesReturnSchema = new schema({
  productName: { type: String, required: true, enum: ["coke", "pepsi", "dew"] },
  price: { type: Number, default: 0 },
  netAmount: { type: Number },
  tender: { type: Number },
  returnAmount: { type: Number },
  quantity: { type: Number, required: true, default: 0 },
  transactionType: {
    type: String,
    required: true,
    default: "sale",
    enum: ["sale", "return"],
  },
  addedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("sales_return", salesReturnSchema);
