const GetPaymentMethod = require("./get/get_payment_method")
const DirectPayment = require("./post/direct_payment")
const RedirectPayment = require("./post/redirect_payment")
const { status404 } = require('../../../../config/status')

const GetMethod = async (req, res) => {
    return GetPaymentMethod(req, res)
}

const PostMethod = async (req, res) => {
    const { type } = req.query;

    if (type == 'direct') {
        return await DirectPayment(req, res)
    } else if (type == 'redirect') {
        return await RedirectPayment(req, res)
    } else {
        return status404(req, res)
    }

}

module.exports = {
  GetMethod,
  PostMethod,
}