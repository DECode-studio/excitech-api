const fcmPollingKu = require('../../../config/fcm/fcm_polling_ku')
const { getTokenByUser } = require('../token_notify_controller')

const PollingKuSuccesTransactionNotify = async (data) => {
    var token = await getTokenByUser(data.id)

    var message = {
        registration_ids: token.map((value) => value.idToken),
        collapse_key: 'transaction_success',

        notification: {
            title: 'Transaksi Telah Berhasil',
            body: data.product != 'donation'
                ? `Selamat transaksi anda untuk meningkatkan akun anda menjadi ${data.product} telah berhasil`
                : `Selamat transaksi anda untuk ${data.desc} telah berhasil`
        },

        data: {
            channel: 'transaction_channel',
            route: '/notify',
        }
    };

    fcmPollingKu.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}

const PollingKuRequestTransactionNotify = async (data) => {
    var token = await getTokenByUser(data.id)

    var message = {
        registration_ids: token.map((value) => value.idToken),
        collapse_key: 'transaction_waiting',

        notification: {
            title: 'Selesaikan Transaksi Anda',
            body: data.product != 'donation'
                ? `Silahkan selesaikan transaksi anda untuk meningkatkan akun anda menjadi ${data.product}`
                : `Silahkan Silahkan selesaikan transaksi anda untuk ${data.desc}`
        },

        data: {
            channel: 'transaction_channel',
            route: '/notify',
        }
    };

    fcmPollingKu.send(message, function (err, response) {
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}

const PollingKuFailedTransactionNotify = async (data) => {
    var token = await getTokenByUser(data.id)

    var message = {
        registration_ids: token.map((value) => value.idToken), 
        collapse_key: 'transaction_failed',
        
        notification: {
            title: 'Transaksi Gagal',
            body: data.product != 'donation'
                ? `Yah Sayang Sekali...\nTransaksi anda untuk meningkatkan akun anda menjadi ${data.product} telah gagal\nSilahkan ulangi lagi`
                : `Yah Sayang Sekali...\nTransaksi anda untuk ${data.desc} telah gagal\nSilahkan ulangi lagi`
        },
        
        data: {
            channel: 'transaction_channel',
            route: '/notify',
        }
    };
    
    fcmPollingKu.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
}

module.exports = {
    PollingKuSuccesTransactionNotify,
    PollingKuRequestTransactionNotify,
    PollingKuFailedTransactionNotify,
}
