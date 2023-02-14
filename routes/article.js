const express = require('express')
const router = express.Router()
const Article = require('./../models/article')
const {
    getAllArticles,
    createOneNewArticle,
    deleteAllArticles,
    getAnArticle,
    updateArticle,
    updatePartially,
    deleteAnArticle
} = require('./../controllers/article')

router.route('/')
.get(getAllArticles)
.post(createOneNewArticle)
.delete(deleteAllArticles);

/////////////requests a specific article/////////////////////////////
router.route('/:articleTitle')
.get(getAnArticle)
.put(updateArticle)
.patch(updatePartially)
.delete(deleteAnArticle);

module.exports = router
