const router = require("express").Router();

const {
  getArticles,
  newArticle,
  getArticleDetails,
  deleteArticle,
  editArticle,
  searchArticle
} = require('./../controllers/article.controller')

router.get('/getArticles', getArticles)

router.post('/newArticle', newArticle)

router.get('/getArticleDetails/:article_id', getArticleDetails)

router.delete('/deleteArticle/:article_id', deleteArticle)

router.put('/editArticle/:article_id', editArticle)

router.get('/searchArticle/:search', searchArticle)


module.exports = router
