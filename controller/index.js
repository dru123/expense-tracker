//GET transaction
const transactionModel = require("../model/transaction");
exports.getTransaction = async (req, res, next) => {
  try {
    const transactionData = await transactionModel.find();
    res.status(200).json({
      message: "successfull get",
      data: transactionData,
      count: transactionData.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Error Occureed" });
  }
};

//Add transaction
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await transactionModel.create(req.body);
    return res.status(201).json({
      message: "successfully created",
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error  Canno add transaction" });
  }
};

//Delete Transaction
exports.deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await transactionModel.findById(id);
    if (!transaction) {
      return res.status(500).json({ message: "No transaction found" });
    }
    await transaction.remove();
    return res.status(201).json({
      message: "successfully deleted",
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json("Error Occureed");
  }
};
exports.getTotal = async (req, res, next) => {
  try {
    const transaction = await transactionModel.find();
    if (!transaction) {
      return res.status(500).json({ message: "No transaction found" });
    }
    const amount = transaction.map((e) => e.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0);
    return res.status(200).json({ total: total });
  } catch (error) {
    return res.status(500).json("Error Occureed");
  }
};
