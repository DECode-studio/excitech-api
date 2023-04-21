const excitechRoutes = require('./router/excitech_route')
const iPaymuRoutes = require('./router/i_paymu_route')
const testRoutes = require('./router/test_route')
const pollingKuRoutes = require('./router/polling_ku_route')
const myFinanceRoutes = require('./router/my_finance_route')
const quranKuRoutes = require('./router/quran_ku_route')

module.exports = (app) => {
  excitechRoutes(app);
  iPaymuRoutes(app);
  testRoutes(app);
  pollingKuRoutes(app);
  myFinanceRoutes(app);
  quranKuRoutes(app);
};