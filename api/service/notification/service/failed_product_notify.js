const { getTransaksibyId } = require("../../excitech/transaksi_controller");
const { PollingKuFailedTransactionNotify } = require("../../polling-ku/fcm")
const { QuranKuFailedTransactionNotify } = require("../../quran-ku/fcm")

const FailedProductNotify = async (req) => {
    const { id, code } = req.query;
    const data = req.body

    var transaksi = await getTransaksibyId(data.reference_id)

    var body = {
        id: id,
        product: code,  
        desc: transaksi.data[0].desc_transaksi,
    }

    if (transaksi.data[0].prod_transaksi == 'polling-ku') {
        PollingKuFailedTransactionNotify(body)
    }

    if (transaksi.data[0].prod_transaksi == 'quran-ku') {
        QuranKuFailedTransactionNotify(body)
    }
}

module.exports = FailedProductNotify