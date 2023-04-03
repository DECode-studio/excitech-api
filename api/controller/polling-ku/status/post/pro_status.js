const { Timestamp } = require("firebase/firestore")
const { updateStatus } = require("../../../../service/polling-ku/status_controller");

const ProStatus = async (req, res) => {
    const { id, code } = req.query;
    var date = new Date()
    var time = new Date(date.setMonth(date.getMonth() + 1));

    var status = {
        idStatus: id,
        idUser: id,
        nameStatus: 'pro',
        timeStatus: Timestamp.fromDate(time),
    }

    var process = await updateStatus(status);

    var response = {
        status: 200,
        message: "Update Status Success",
        data: status,
        process: process,
    }

    return res.status(200).json(response)
}

module.exports = ProStatus