const { devApiKey, devVa } = require('../../../../../config/payment_gateway/pg_config')
const { devPg } = require('../../../../../config/payment_gateway/end_point')
const axios = require('axios')
const cryptoJs = require('crypto-js')

const GetAllTransactions = async (req, res) => {
    var apiKey = devApiKey
    var va = devVa
    var url = devPg
    var time = Date.now()
    let body = new FormData();
    
    var bodyEncrypt = cryptoJs.SHA256(JSON.stringify(body))
    var stringtosign = "POST:"+va+":"+bodyEncrypt+":"+apiKey;
    var signature = cryptoJs.enc.Hex.stringify(cryptoJs.HmacSHA256(stringtosign, apiKey));

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${url}/api/v2/history`,
        headers: { 
          'Content-Type': 'application/json', 
          'signature': signature, 
          'va': va, 
          'timestamp': `${time}`, 
        },
        data : bodyEncrypt
      };

    var data =  await axios(config)

    return res.status(200).json(data.data)
}

module.exports = GetAllTransactions