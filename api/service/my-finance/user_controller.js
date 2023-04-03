const { database } = require("../../config/firebase/init_my_finance");
const { collection, getDocs, getDoc, doc } = require('firebase/firestore');

const dbInstance = collection(database, 'Users');

const getUser = async () => {
    var data = [];
    const document = await getDocs(dbInstance)

    document.forEach((value) => {
        data.push(value.data())
    })

    return data;
}

const getUserById = async (id) => {
    const collectionById = doc(database, "Users", id)

    const data = await getDoc(collectionById)

    return data.data()
}

module.exports = {
    getUser,
    getUserById,
}