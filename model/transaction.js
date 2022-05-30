const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add some positive or negative number"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Trasaction", transactionSchema);
