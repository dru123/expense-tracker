const express = require("express");
const router = express.Router();
const transactionController = require("../controller/index");
router.get("/", transactionController.getTransaction);
router.post("/", transactionController.addTransaction);
router.delete("/:id", transactionController.deleteTransaction);
router.get("/total", transactionController.getTotal);
module.exports = router;
