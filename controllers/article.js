const Article = require('./../models/article')

const getAllArticles = (req, res)=>{
    Article.find({}, (error, foundArticles)=>{
        if (error){
            res.send(error)
        }
        else {
            res.send(foundArticles)
        }
    })
}

const createOneNewArticle = (req, res)=>{
    const newArticle = new Article(
        {
            title: req.body.title,
            content: req.body.content
        }
    )
    // save it in the database
    newArticle.save(function(err){
        if (!err){
            res.send('succesffully added to the database')
        }
        else {
            res.send(err)
        }
    })
}
const deleteAllArticles = (req, res)=>{
    Article.deleteMany(function(err){
        if (!err){
            res.send("successfully deleted")
        }
        else {
            res.send('something went wrong')
        }
    })
}
const getAnArticle = (req, res)=>{
    Article.findOne({title: req.params.articleTitle}, function(err, foundData){
        if (!err){
            res.send(foundData)
        }
        else {
            res.send("No article is found")
        }
    })
}
const updateArticle = async(req, res)=>{
    await Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content}
    )
    res.send("updated successfully")
}
const updatePartially = async function(req, res){
    const result = await Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body}
    )
    if (result.acknowledged){
        res.send("updated successfully")
    }
    else {
        res.send("Something went wrong")
    }
}
const deleteAnArticle = function(req, res){
    Article.deleteOne({title: req.params.articleTitle}, (err)=>{
        if (!err){
            res.send("deleted successfully")
        }
        else {
            res.send("Something went wrong");
        }
    })
}
module.exports = {
    getAllArticles,
    createOneNewArticle,
    deleteAllArticles,
    getAnArticle,
    updateArticle,
    updatePartially,
    deleteAnArticle
}