const { collection, getDocs, getDoc, doc } = require('firebase/firestore');
const { database } = require("../../config/firebase/init_polling_ku");

const dbInstance = collection(database, 'tblUser');

const getUser = async () => {
    var data = [];
    const document = await getDocs(dbInstance)

    document.forEach((value) => {
        data.push(value.data())
    })

    return data;
}

const getUserById = async (id) => {
    const collectionById = doc(database, "tblUser", id)

    const data = await getDoc(collectionById)

    return data.data()
}

module.exports = {
    getUser,
    getUserById,
}