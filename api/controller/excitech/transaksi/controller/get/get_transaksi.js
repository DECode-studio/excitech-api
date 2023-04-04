const { getTransaksibyId } = require("../../../../../service/excitech/transaksi_controller");

const GetTransaksi = async (req, res) => {
    const { id } = req.query;
    var data = await getTransaksibyId(id)

    var response = {
        status: 200,
        data: data.data[0] ?? {},
    }

    return res.status(200).json(response)
}

module.exports = GetTransaksi