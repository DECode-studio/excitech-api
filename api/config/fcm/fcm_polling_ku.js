const FCM = require('fcm-node');

const serverKey = 'AAAAmlJrR7E:APA91bGRoRUJInxjQwFSCnwwfUKGCumMALAFDFhXGGMX-gmHEsm-bl_Xs_XM61BtgFSizGWcZMs3RwphojC6Wr-9vh74SsMpIIP35OV_y7x02U4nG8U-JD-5f1Dt4Dmdt7ChbIus3cmk'
const fcmPollingKu = new FCM(serverKey);

module.exports = fcmPollingKu