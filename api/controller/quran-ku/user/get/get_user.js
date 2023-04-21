const { getStatusById } = require('../../../../service/quran-ku/status_controller');
const { getTokenByUser } = require('../../../../service/quran-ku/token_notify_controller');
const { getUserById } = require('../../../../service/quran-ku/user_controller');

const GetUser = async (req, res) => {
    const { id } = req.query;

    var user = await getUserById(id)
    var status = await getStatusById(id)
    var token = await getTokenByUser(id)

    var data = {...user, status: status, token:token}
    
    var response = {
        status: 200,
        data: data,
    }

    return res.status(200).json(response)
}

module.exports = GetUser