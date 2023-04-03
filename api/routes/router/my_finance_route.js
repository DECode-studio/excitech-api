const controller = require('../../controller')

module.exports = (app) => {
    app.route('/api/my-finance/user')
        .get(controller.my_finance.user.GetUsers)
}