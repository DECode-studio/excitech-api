const { prodVa } = require('../../../../config/payment_gateway/pg_config')
const GetBalance = require("./get/get_balance")

const GetMethod = async (req, res) => {
    let data = new FormData();
    data.append('account', prodVa);

    return await GetBalance(data, res)
}

module.exports = {
  GetMethod,
}