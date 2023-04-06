const { RequestTransactionNotify } = require("../../polling-ku/fcm")

const CheckProductNotify = (req) => {
    var data = req.body
    var body = {
        id: data.idUser,
        product: data.nameProduct
    }

    if (data.product == 'polling-ku') {
        RequestTransactionNotify(body)
    }
}

module.exports = CheckProductNotify