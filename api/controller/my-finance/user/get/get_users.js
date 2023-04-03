const { getUser } = require("../../../../service/my-finance/user_controller")

const GetAllUsers = async (req, res) => {
    var users = await getUser()

    var response = {
        status: 200,
        data: users
    }

    return res.status(200).json(response)
}

module.exports = GetAllUsers