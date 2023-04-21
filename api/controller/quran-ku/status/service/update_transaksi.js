const { updateTransaksi } = require("../../../../service/excitech/transaksi_controller")

const UpdateTransaksi = async (data) => {

    var id_transaction = data.reference_id 

    var transaksi = {
        status_transaksi: data.status
    }

    await updateTransaksi(transaksi, id_transaction)
}

module.exports = UpdateTransaksi