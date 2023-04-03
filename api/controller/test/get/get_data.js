const data = require('../data/data');

const GetData = (req, res) => {
    var id = req.params.id
    var result = data.filter((e) => e.id == id)

    var response = {
        status: 200,
        data: result
    }

    return res.status(200).json(response)
}

module.exports = GetData