const status405 = (req, res) => {
    return res.status(405).json({
        status: 405,
        message: "Method not allowed",
    })
}

const status404 = (req, res) => {
    return res.status(404).json({
        status: 404,
        message: "Not found",
    })
}

const status200TransactionFailed = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Transaction Failed / Expired",
    })
}

module.exports = {
    status404,
    status405,
    status200TransactionFailed
}