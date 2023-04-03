const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://xasrkjnshoezosgbgkfd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhc3Jram5zaG9lem9zZ2Jna2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMDA4NzAsImV4cCI6MTk5NDc3Njg3MH0.tjmD-vhhR3-fnnFOZi4dPg3pMUCDUMzdzFdHK_mKNKQ'

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

module.exports = supabase