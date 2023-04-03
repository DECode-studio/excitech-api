const data = require('../data/data');

const GetAllData = (req, res) => {
    var response = {
        status: 200,
        data: data
    }

    return res.status(200).json(response)
}

module.exports = GetAllData;