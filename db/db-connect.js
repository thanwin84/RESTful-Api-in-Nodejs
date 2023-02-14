const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/wikiDB'
mongoose.set('strictQuery', true)
function connect(){
    try{
        mongoose.connect(url)
        console.log('Connected to MongoDB successfully')
    }
    catch(error){
        console.log(error)
    }
}
connect()
