const supabase = require("../../config/supabase/init_excitech")

const getLog = async () => {
    return await supabase
            .from('tbl_log')
            .select()
}

const getLogbyId = async (id) => {
    return await supabase
            .from('tbl_log')
            .select()
            .filter('id_log', 'eq', id)
}

const updateLog = async ( log, id ) => {
    var id_log = id
    
    return await supabase
            .from('tbl_log')
            .update([log])
            .match({ id_log });
}

const addLog = async ( log ) => {
    return await supabase
            .from('tbl_log')
            .insert([log])
}

const deleteLog = async (id) => {
    return await supabase
            .from('tbl_log')
            .delete()
            .match({ id })
}

module.exports = {
    getLog,
    getLogbyId,
    updateLog,
    addLog,
    deleteLog,
}