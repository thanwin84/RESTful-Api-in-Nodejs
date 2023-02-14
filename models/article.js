const mongoose = require('mongoose')
const ArticleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String
        }
    }
)

const Article = mongoose.model('Article', ArticleSchema)
const newArticle = new Article(
    {
        title: "my title",
        content: "my content"
    }
)
// console.log(newArticle)

module.exports = Article
