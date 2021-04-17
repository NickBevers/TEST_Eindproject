const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    amount: Number,
    user: String,
    recipient: String,
    reason: String
})
const Transaction= mongoose.model('Transaction', transactionSchema);

// POST new transaction
function newTransaction(req, res){
    let transaction = new Transaction();
    transaction.amount = 25;
    transaction.user = "Nick Bevers";
    transaction.recipient = "Gollum";
    transaction.reason = "Precious is love, precious is life!"
    transaction.save((err, doc) => {
        if (!err){
            res.json({
                status: "Succes",
                message: `POSTING a new transaction`,
                data: {
                    transaction: doc
                }
            })
        }
    })
    
}

// GET all transactions from 1 user
function getTransactions(req, res){
    res.json({
        status: "Succes",
        message: `GETting all transactions from user`})
}

// GET all details from specific transaction
function getTransferById(req, res){
    let id = req.params.id;
    res.json({
        status: "Succes",
        message: `GETting transactions with id ${id} from user`})
}

// GET aal users with #coins per user
function getLeaderboard(req, res){
    res.json({
        status: "Succes",
        message: `GETting all coins per user`})
}

module.exports.newTransaction = newTransaction;
module.exports.getTransactions = getTransactions;
module.exports.getTransferById = getTransferById;
module.exports.getLeaderboard = getLeaderboard;
