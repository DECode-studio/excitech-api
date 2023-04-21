const FCM = require('fcm-node');

const serverKey = 'AAAA00d5PHc:APA91bESG62t08xDNRWSCj_qbQbrSNAzNd_9hh9nmAR_FIO37uu30WEfpARl39RpSR3vFaZj2sS1aToxpOxCra_JK4p7AKQvDdqVLOe7vx4fKe80pvHbjNE7lNOk70y-em9EmSHFTChJ'
const fcmQuranKu = new FCM(serverKey);

module.exports = fcmQuranKu