const data = require('../data/data');

const PostData = (req, res) => {
    var body = req.body
    data.push(body)

    var response = {
        status: 200,
        message: "Data saved successfully",
        data: data
    }

    return res.status(200).json(response)
}

module.exports = PostData;