const { getUserById } = require("../../../../service/my-finance/user_controller")

const GetUser = async (req, res) => {
    var { id } = req.query;
    var user = await getUserById(id)

    var response = {
        status: 200,
        data: user
    }

    return res.status(200).json(response)
}

module.exports = GetUser