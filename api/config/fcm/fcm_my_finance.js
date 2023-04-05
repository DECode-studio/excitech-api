const FCM = require('fcm-node');
const { myFinanceConfig } = require('../firebase/init_my_finance')

const fcmMyFinance = new FCM(myFinanceConfig.apiKey);

module.exports = fcmMyFinance