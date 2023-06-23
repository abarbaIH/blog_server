const router = require("express").Router();

const {
  getArticles,
  newArticle,
  getArticleDetails,
  deleteArticle,
  editArticle
} = require('./../controllers/article.controller')

router.get('/getArticles', getArticles)

router.post('/newArticle', newArticle)

router.get('/getArticleDetails/:article_id', getArticleDetails)

router.delete('/deleteArticle/:article_id', deleteArticle)

router.put('/editArticle/:article_id', editArticle)


module.exports = router

// http://localhost:5005/api/articles/getArticleDetails/6495876e94fd8d7238733e5c