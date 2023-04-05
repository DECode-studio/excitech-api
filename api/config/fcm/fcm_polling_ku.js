const FCM = require('fcm-node');
const { pollingKuConfig } = require('../firebase/init_polling_ku')

const fcmPollingKu = new FCM(pollingKuConfig.apiKey);

module.exports = fcmPollingKu