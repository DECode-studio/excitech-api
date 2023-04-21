const GetAllUsers = require('./get/get_users');
const GetUser = require('./get/get_user');

const GetUsers = async (req, res) => {
    const { id } = req.query;

    if (id == null) {
        return await GetAllUsers(req, res)
    } else {
        return await GetUser(req, res)
    }
}

module.exports = {
    GetUsers,
}