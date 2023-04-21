const controller = require('../../controller')

module.exports = (app) => {
    app.route('/api/quran-ku/status')
        .post(controller.quran_ku.status.PostStatus)
    app.route('/api/quran-ku/user')
        .get(controller.quran_ku.users.GetUsers)
}