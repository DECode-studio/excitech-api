const axios = require("axios")
const cryptoJs = require("crypto-js")
const PostTransaksi = require("./post_transaksi")
const { prodApiKey, prodVa } = require('../../../../../config/payment_gateway/pg_config')
const { prodsPg } = require('../../../../../config/payment_gateway/end_point')

const RedirectPayment = async (req, res) => {
    var data = req.body
    var apiKey = prodApiKey
    var va = prodVa
    var url = prodsPg
    var time = Date.now()

    var body = {
        product: [`${data.status}`],
        qty: ['1'],
        price: [`${data.price}`],
        amount: `${data.price}`,
        returnUrl: data.returnUrl,
        cancelUrl: data.cancelUrl,
        notifyUrl: data.callBack,
        referenceId: data.transactionId,
        buyerName: data.user,
        buyerPhone: data.phone,
        buyerEmail: data.email,
    }
    
    var bodyEncrypt = cryptoJs.SHA256(JSON.stringify(body))
    var stringtosign = "POST:"+va+":"+bodyEncrypt+":"+apiKey;
    var signature = cryptoJs.enc.Hex.stringify(cryptoJs.HmacSHA256(stringtosign, apiKey));

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${url}/api/v2/payment`,
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

    res.status(200).json(response.data)
}

module.exports = RedirectPayment