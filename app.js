const express = require('express');
const dbConnect = require(__dirname + '/db/db-connect')
const articleRouter = require(__dirname + '/routes/article')

const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
  }))
app.use('/articles', articleRouter)



app.listen(3000, (req, res)=>{
    console.log("Server is listening on port 3000")
})