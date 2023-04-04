const { devApiKey, devVa } = require('../../../../../config/payment_gateway/pg_config');
const { devPg } = require('../../../../../config/payment_gateway/end_point');
const axios = require('axios');
const cryptoJs = require('crypto-js');

const GetBalance = async (data, res) => {
    var apiKey = devApiKey
    var va = devVa
    var url = devPg
    var time = Date.now()
    
    var bodyEncrypt = cryptoJs.SHA256(JSON.stringify(data))
    var stringtosign = "POST:"+va+":"+bodyEncrypt+":"+apiKey;
    var signature = cryptoJs.enc.Hex.stringify(cryptoJs.HmacSHA256(stringtosign, apiKey));

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${url}/api/v2/balance`,
        headers: { 
          'Content-Type': 'multipart/form-data', 
          'signature': signature, 
          'va': va, 
          'timestamp': `${time}`, 
        },
        data : data
      };

    var response =  await axios(config)

    return res.status(200).json(response.data)
}

module.exports = GetBalance