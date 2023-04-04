const GetAllTransactions = require("./get/get_history")
const GetTransaction = require("./get/get_transaction")

const GetMethod = async (req, res) => {
    const { id } = req.query

    if (id == null) {
        return await GetAllTransactions(req, res)
    } else {
        return await GetTransaction(req, res)
    }
}

module.exports = {
    GetMethod,
}