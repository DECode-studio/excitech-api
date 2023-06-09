const { status405, status200TransactionFailed } = require('../../../config/status');
const LogStatus = require('./service/log_status');
const UpdateTransaksi = require('./service/update_transaksi');
const ProStatus = require('./post/pro_status');
const PremiumStatus = require('./post/premium_status');
const UnlimitedStatus = require('./post/unlimited_status');
const notification = require('../../../service/notification')

const PostStatus = async (req, res) => {
    const { id, code } = req.query;
    const data = req.body

    if (id == null || code == null) {
        return status405(req, res)
    } else {
        LogStatus(data)
        UpdateTransaksi(data)

        if (data.status == 'berhasil') {
            notification.SuccesProductNotify(req)

            if (code == 'pro') {
                return await ProStatus(req, res)
            } else if (code == 'premium') {
                return await PremiumStatus(req, res)
            } else if (code == 'unlimited') {
                return await UnlimitedStatus(req, res)
            } else {
                return status405(req, res)
            }
        } else {
            notification.FailedProductNotify(req)
            return status200TransactionFailed(req, res)
        }
    }
}

module.exports = {
    PostStatus,
}