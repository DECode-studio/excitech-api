const testRoutes = require('./router/test_route')
const pollingKuRoutes = require('./router/polling_ku_route')
const myFinanceRoutes = require('./router/my_finance_route')
const iPaymuRoutes = require('./router/i_paymu_route')

module.exports = (app) => {
    testRoutes(app);
    pollingKuRoutes(app);
    myFinanceRoutes(app);
    iPaymuRoutes(app)
  };