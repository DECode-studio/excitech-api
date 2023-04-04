const controller = require('../../controller')

module.exports = (app) => {
    app.route('/api/excitech/transaksi')
        .get(controller.excitech.transaksi.GetMethod)
        .post(controller.excitech.transaksi.PostMethod)
        .put(controller.excitech.transaksi.PutMethod)
}