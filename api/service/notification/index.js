const FailedProductNotify = require('./service/failed_product_notify');
const SuccesProductNotify = require('./service/succes_product_notify')
const CheckProductNotify = require('./service/check_product_notify')


module.exports = {
    CheckProductNotify,
    SuccesProductNotify,
    FailedProductNotify
}