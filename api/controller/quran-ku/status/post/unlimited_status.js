const { updateStatus } = require("../../../../service/quran-ku/status_controller");

const UnlimitedStatus = async (req, res) => {
    const { id, code } = req.query;

    var status = {
        idStatus: id,
        idUser: id,
        nameStatus: 'unlimited',
        timeStatus: null,
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

module.exports = UnlimitedStatus