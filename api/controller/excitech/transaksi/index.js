const GetAllTransaksi = require("./controller/get/get_all_transaksi")
const GetTransaksi = require("./controller/get/get_transaksi")
const GetUserTransaksi = require("./controller/get/get_user_transaksi")
const PostTransaksi = require("./controller/post/post_transaksi")
const PutTransaksi = require("./controller/put/put_transaksi")

const GetMethod = async (req, res) => {
    const { id, user } = req.query;

    if (id != null) {
      return await GetTransaksi(req, res)
    } else if (user != null) {
      return GetUserTransaksi(req, res)
    } else {
      return await GetAllTransaksi(req, res)
    }
}

const PostMethod = async (req, res) => {
    return await PostTransaksi(req, res)
}

const PutMethod = async (req, res) => {
    return await PutTransaksi(req, res)
}

module.exports = {
  GetMethod,
  PostMethod,
  PutMethod,
}