const { getTransaksibyId } = require("../../excitech/transaksi_controller");
const { SuccesTransactionNotify } = require("../../polling-ku/fcm")

const SuccesProductNotify = async (req) => {
    const { id, code } = req.query;
    const data = req.body

    var body = {
        id: id,
        product: code
    }

    var transaksi = await getTransaksibyId(data.reference_id)

    if (transaksi.data[0].prod_transaksi == 'polling-ku') {
        SuccesTransactionNotify(body)
    }
}

module.exports = SuccesProductNotify