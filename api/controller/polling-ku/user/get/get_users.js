const { getUser } = require('../../../../service/polling-ku/user_controller');
const { getStatus } = require('../../../../service/polling-ku/status_controller');
const { getToken } = require('../../../../service/polling-ku/token_notify_controller');

const GetAllUsers = async (req, res) => {
    var users = await getUser()
    var status = await getStatus()
    var token = await getToken()

    var data = users.map((value, index) => {
        var sts = status.filter((e) => e.idUser == value.idUser)[0]
        var tkn = token.filter((e) => e.idUser == value.idUser)[0]
        
        return value = {...value, status: sts, token:tkn}
    })
    
    var response = {
        status: 200,
        data: data,
    }

    return res.status(200).json(response)
}

module.exports = GetAllUsers