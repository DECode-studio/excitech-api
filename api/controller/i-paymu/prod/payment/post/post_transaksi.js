const { addTransaksi } = require('../../../../../service/excitech/transaksi_controller')

const PostTransaksi = async (req, pg) => {
    var data = req.body

    var transaksi = {
        id_transaksi: data.transactionId,
        id_auth: data.idUser,
        id_reff: data.idReff,
        prod_transaksi: data.product,
        title_transaksi: data.nameProduct,
        desc_transaksi: data.descProduct,
        in_transaksi: data.priceProduct,
        out_transaksi: data.feeProduct,
        status_transaksi: 'pending',
        channel_transaksi: pg.Channel,
        code_transaksi: pg.PaymentNo,
        guide_transaksi: data.guidePayment,
        exp_transaksi: pg.Expired,
    }

    await addTransaksi(transaksi)
}

module.exports = PostTransaksi