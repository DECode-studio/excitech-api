const { getTransaksiRefId } = require("../../../../../service/excitech/transaksi_controller");

const GetUserTransaksi = async (req, res) => {
    const { user } = req.query;
    var data = await getTransaksiRefId(user)

    var response = {
        status: 200,
        data: data.data,
    }

    return res.status(200).json(response)
}

module.exports = GetUserTransaksi