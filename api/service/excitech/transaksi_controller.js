const supabase = require("../../config/supabase/init_excitech")

const getTransaksi = async () => {
    return await supabase
            .from('tbl_transaksi')
            .select()
}

const getTransaksibyId = async (id) => {
    return await supabase
            .from('tbl_transaksi')
            .select()
            .filter('id_transaksi', 'eq', id)
}

const getTransaksiRefId = async (id) => {
    return await supabase
            .from('tbl_transaksi')
            .select()
            .filter('id_auth', 'eq', id)
}

const updateTransaksi = async ( transaksi, id ) => {
    var id_transaksi = id
    
    return await supabase
            .from('tbl_transaksi')
            .update([transaksi])
            .match({ id_transaksi });
}

const addTransaksi = async ( transaksi ) => {
    return await supabase
            .from('tbl_transaksi')
            .insert([transaksi])
}

const deleteTransaksi = async (id) => {
    return await supabase
            .from('tbl_transaksi')
            .delete()
            .match({ id })
}

module.exports = {
    getTransaksi, 
    getTransaksibyId,
    getTransaksiRefId,
    updateTransaksi,
    addTransaksi,
    deleteTransaksi,
}