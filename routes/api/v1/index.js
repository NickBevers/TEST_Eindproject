var express = require('express');
var router = express.Router();
const controller = require("../../../controllers/api/v1/transactions");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Make new transaction
router.post("/transfers", controller.newTransaction)

//Get all transactions from user
router.get("/transfers", controller.getTransactions)

//Get all details from specifc transaction
router.get("/transfers/:id", controller.getTransferById)

//Get #coins per user -> make leaderboard out of it
router.get("/leaderboard", controller.getLeaderboard)

module.exports = router;
