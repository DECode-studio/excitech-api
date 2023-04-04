const { getTransaksi } = require("../../../../../service/excitech/transaksi_controller")

const GetAllTransaksi = async (req, res) => {
    var data = await getTransaksi()

    var response = {
        status: 200,
        data: data.data,
    }

    return res.status(200).json(response)
}

module.exports = GetAllTransaksi