const { getTransaksibyId } = require("../../excitech/transaksi_controller");
const { PollingKuSuccesTransactionNotify } = require("../../polling-ku/fcm")
const { QuranKuSuccesTransactionNotify } = require("../../quran-ku/fcm")

const SuccesProductNotify = async (req) => {
    const { id, code } = req.query;
    const data = req.body

    var transaksi = await getTransaksibyId(data.reference_id)

    var body = {
        id: id,
        product: code,  
        desc: transaksi.data[0].desc_transaksi,
    }

    if (transaksi.data[0].prod_transaksi == 'polling-ku') {
        PollingKuSuccesTransactionNotify(body)
    }

    if (transaksi.data[0].prod_transaksi == 'quran-ku') {
        QuranKuSuccesTransactionNotify(body)
    }
}

module.exports = SuccesProductNotify