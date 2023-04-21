const { database } = require("../../config/firebase/init_quran_ku");
const { collection, getDocs, getDoc, doc, updateDoc } = require('firebase/firestore');

const dbInstance = collection(database, 'tblStatus');

const getStatus = async () => {
    var data = [];
    const document = await getDocs(dbInstance)

    document.forEach((value) => {
        data.push(value.data())
    })

    return data;
}

const getStatusById = async (id) => {
    const collectionById = doc(database, "tblStatus", id)

    const data = await getDoc(collectionById)

    return data.data()
}

const updateStatus = async (status) => {
    const collectionById = doc(database, 'tblStatus', status.idStatus)

    return await updateDoc(collectionById, status)
}

module.exports = {
    getStatus,
    getStatusById,
    updateStatus,
}