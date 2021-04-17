const Transaction = require('../../../models/Transaction')

// POST new transaction
function newTransaction(req, res){
    let transaction = new Transaction();
    transaction.amount = req.body.amount;
    transaction.user = req.body.user;
    transaction.recipient = req.body.recipient;
    transaction.reason = req.body.reason;

    transaction.save((err, doc) => {
        if(err){
            res.json({
                status: "Error",
                message: `Could not fulfill your transaction`})
        }

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
    Transaction.find({user: "Nick Bevers"}, (err, docs) => {
        if(!err){
            res.json({
                status: "Succes",
                message: `GETting all transactions from user`,
                data: {
                    transaction: docs
                }
            })
        }
    });    
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
