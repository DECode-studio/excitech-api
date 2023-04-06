const { collection, getDocs, getDoc, doc, query, where } = require('firebase/firestore');
const { database } = require("../../config/firebase/init_polling_ku");

const dbInstance = collection(database, 'tblTokenNoitfy');

const getToken = async () => {
    var data = [];
    const document = await getDocs(dbInstance)

    document.forEach((value) => {
        data.push(value.data())
    })

    return data;
}

const getTokenByUser = async (id) => {
    var data = [];
    const qData = query(collection(database, "tblTokenNoitfy"), where("idUser", "==", id))
    const document = await getDocs(qData)

    document.forEach((value) => {
        data.push(value.data())
    })


    return data
}

const getTokenById = async (id) => {
    const collectionById = doc(database, "tblTokenNoitfy", id)

    const data = await getDoc(collectionById)

    return data.data()
}

module.exports = {
    getToken,
    getTokenByUser,
    getTokenById,
}