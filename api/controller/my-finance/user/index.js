const GetUser = require("../../my-finance/user/get/get_user");
const GetAllUsers = require("../../my-finance/user/get/get_users");

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