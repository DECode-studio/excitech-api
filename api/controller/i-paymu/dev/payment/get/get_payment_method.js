const { devApiKey, devVa } = require('../../../../../config/payment_gateway/pg_config');
const { devPg } = require('../../../../../config/payment_gateway/end_point');
const axios = require('axios')
const cryptoJs = require("crypto-js")
const getBankImage = require('../data/bank_image')

const GetPaymentMethod = async (req, res) => {
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
        url: `${url}/api/v2/payment-method-list`,
        headers: { 
          'Content-Type': 'multipart/form-data', 
          'signature': signature, 
          'va': va, 
          'timestamp': `${time}`, 
        },
        data : bodyEncrypt
      };

    var data =  await axios(config)

    var payment = data.data.Data.map((e, i, e1) => {
      var arr0 =  e1[0].Channels.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[0].Code, descriptionType: e1[0].Description}
      })

      var arr1 = e1[1].PaymentMethod.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[1].Code, descriptionType: e1[1].Description}
      })

      var arr2 = e1[2].PaymentMethod.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[2].Code, descriptionType: e1[2].Description}
      })

      var arr3 = e1[3].PaymentMethod.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[3].Code, descriptionType: e1[3].Description}
      })

      var arr4 = e1[4].PaymentMethod.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[4].Code, descriptionType: e1[4].Description}
      })

      var arr5 = e1[5].PaymentMethod.map((e2) => {
        return {...e2,image: getBankImage(e2.Code), type: e1[5].Code, descriptionType: e1[5].Description}
      })


      return [...arr0,...arr1,...arr2,...arr3,...arr4,...arr5,]
    })

    var result = {
      Status: 200,
      Success: true,
      Message: 'Success get Payment Method',
      Data: payment[0],
    }

    return res.status(200).json(result)
}

module.exports = GetPaymentMethod