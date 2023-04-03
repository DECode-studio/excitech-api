const { addLog } = require('../../../../service/excitech/log_controller');
const { v4 } = require('uuid');

const LogStatus = async ( data ) => {
    var id = v4()

    var log = {
        id_log: id,
        data_log: data,
    }

    await addLog(log)
}

module.exports = LogStatus