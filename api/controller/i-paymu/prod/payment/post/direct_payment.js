const axios = require("axios")
const cryptoJs = require("crypto-js")
const PostTransaksi = require("./post_transaksi")
const { prodApiKey, prodVa } = require('../../../../../config/payment_gateway/pg_config')
const { prodsPg } = require('../../../../../config/payment_gateway/end_point')

const DirectPayment = async (req, res) => {
    var data = req.body
    var apiKey = prodApiKey
    var va = prodVa
    var url = prodsPg
    var time = Date.now()

    var body = {
        name: data.nameUser,
        phone: data.phoneUser,
        email: data.emailUser,
        product: [`${data.nameProduct}`],
        qty: [`${data.qtyProduct}`],
        amount: data.priceProduct,
        price: [`${data.priceProduct}`],
        comments: data.descProduct,
        notifyUrl: data.callBackUrl,
        referenceId: data.transactionId,
        paymentMethod: data.paymentMethod,
        paymentChannel: data.paymentChannel,
    }
    
    var bodyEncrypt = cryptoJs.SHA256(JSON.stringify(body))
    var stringtosign = "POST:"+va+":"+bodyEncrypt+":"+apiKey;
    var signature = cryptoJs.enc.Hex.stringify(cryptoJs.HmacSHA256(stringtosign, apiKey));

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${url}/api/v2/payment/direct`,
        headers: { 
          'Content-Type': 'application/json', 
          'signature': signature, 
          'va': va, 
          'timestamp': `${time}`, 
        },
        data : body
      };

    var response =  await axios(config)

    await PostTransaksi(req, response.data.Data)

    return res.status(200).json(response.data)
}

module.exports = DirectPayment