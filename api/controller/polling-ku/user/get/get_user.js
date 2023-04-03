const { getStatusById } = require('../../../../service/polling-ku/status_controller');
const { getUserById } = require('../../../../service/polling-ku/user_controller');

const GetUser = async (req, res) => {
    const { id } = req.query;

    var user = await getUserById(id)
    var status = await getStatusById(id)

    var data = {...user, status: status}
    
    var response = {
        status: 200,
        data: data,
    }

    return res.status(200).json(response)
}

module.exports = GetUser