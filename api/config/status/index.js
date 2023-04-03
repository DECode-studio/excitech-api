const status405 = (req, res) => {
    return res.status(405).json({
        status: 405,
        message: "Method not allowed",
    })
}

const status404 = (req, res) => {
    return res.status(404).json({
        status: 404,
        message: "Not found",
    })
}

module.exports = {
    status404,
    status405
}