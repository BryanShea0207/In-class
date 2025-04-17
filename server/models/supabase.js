const { createClient } = require( '@supabase/supabase-js')

const supabaseUrl = 'https://spcjgfclstywswkguurz.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
//const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = {
    connect(){
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)
    }
}