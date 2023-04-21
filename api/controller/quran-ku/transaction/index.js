const { status405 } = require("../../../config/status");
const LogStatus = require("./service/log_status");
const UpdateTransaksi = require("./service/update_transaksi");
const notification = require('../../../service/notification')

const PostMethod = async (req, res) => {
    const { id, code } = req.query;
    const data = req.body

    if (id == null || code == null) {
        return status405(req, res)
    } else {
        LogStatus(data)
        UpdateTransaksi(data)
        notification.SuccesProductNotify(req)
    }
}

module.exports ={
    PostMethod,
}