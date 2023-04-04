const controller = require('../../controller')

module.exports = (app) => {
    //DEV Routes
    app.route('/api/i-paymu/dev/balance')
        .get(controller.i_paymu.dev.balance.GetMethod)
    app.route('/api/i-paymu/dev/payment/list')
        .get(controller.i_paymu.dev.payment.GetMethod)
    app.route('/api/i-paymu/dev/payment')
        .post(controller.i_paymu.dev.payment.PostMethod)
    app.route('/api/i-paymu/dev/transaction')
        .get(controller.i_paymu.dev.transaction.GetMethod)
        
    //PROD Routes
    app.route('/api/i-paymu/prod/balance')
        .get(controller.i_paymu.prod.balance.GetMethod)
    app.route('/api/i-paymu/prod/payment/list')
        .get(controller.i_paymu.prod.payment.GetMethod)
    app.route('/api/i-paymu/prod/payment')
        .post(controller.i_paymu.prod.payment.PostMethod)
    app.route('/api/i-paymu/prod/transaction')
        .get(controller.i_paymu.prod.transaction.GetMethod)
}