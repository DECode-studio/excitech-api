const { updateTransaksi } = require("../../../../../service/excitech/transaksi_controller");

const PutTransaksi = async (req, res) => {
    const { id } = req.query;
    var id_transaction = id;
    var data = req.body
    
    var transaksi = {
        id_auth: data.id_auth,
        prod_transaksi: data.prod_transaksi,
        title_transaksi: data.title_transaksi,
        desc_transaksi: data.desc_transaksi,
        in_transaksi: data.in_transaksi,
        out_transaksi: data.out_transaksi,
        status_transaksi: data.status_transaksi,
    }

    var data = await updateTransaksi(transaksi, id_transaction)

    var response = {
        status: 200,
        message: 'Update Transaction Success!',
        data: data,
    }

    return res.status(200).json(response)
}

module.exports = PutTransaksi