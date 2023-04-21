const { PollingKuRequestTransactionNotify } = require("../../polling-ku/fcm")
const { QuranKuRequestTransactionNotify } = require("../../quran-ku/fcm")

const CheckProductNotify = (req) => {
    var data = req.body
    var body = {
        id: data.idUser,
        product: data.nameProduct,
        desc: data.descProduct,
    }

    if (data.product == 'polling-ku') {
        PollingKuRequestTransactionNotify(body)
    }

    if (data.product == 'quran-ku') {
        QuranKuRequestTransactionNotify(body)
    }
}

module.exports = CheckProductNotify