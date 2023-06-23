const router = require("express").Router();

const {
  getArticles,
  test
} = require('./../controllers/article.controller')

router.get('/getArticles', getArticles)

router.get('/test', test)

module.exports = router
