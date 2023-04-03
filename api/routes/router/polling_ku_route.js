const controller = require('../../controller')

module.exports = (app) => {
    app.route('/api/polling-ku/status')
        .post(controller.polling_ku.status.PostStatus)
    app.route('/api/polling-ku/user')
        .get(controller.polling_ku.users.GetUsers)
}