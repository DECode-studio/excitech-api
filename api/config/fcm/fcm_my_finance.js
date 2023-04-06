const FCM = require('fcm-node');

const serverKey = 'AAAAJeUwP4k:APA91bHRrol7aTbhdvnX4K3hQP8uAT3aqtOP2aUD-ZxSQ05gap8cWViIIzHxGeveM7N4vUnKTMmH5uSI-JKYMDOFhQ9RHtLRSQgMtLmN7ou8HWQueWIlK8z9vHTnHsAhvl5nC_RzUNy4'
const fcmMyFinance = new FCM(serverKey);

module.exports = fcmMyFinance