const controller = require('../../controller')

module.exports = (app) => {
    app.route('/api/test')
        .get(controller.test.GetAllData)
        .post(controller.test.PostData);
    app.route('/api/test/:id')
        .get(controller.test.GetData);
  };