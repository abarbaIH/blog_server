const { response } = require('../app')
const Article = require('./../models/Article.model')

const getArticles = (req, res, next) => {
    setTimeout(() => {
        Article
            .find()
            // .limit(3)
            .then(response => res.json(response))
            .catch(err => next(err))
    }, 4000)

}

const newArticle = (req, res, next) => {

    const { name, manufacturer, description, color, price, articleImg, screen, processor, ram, date } = req.body

    Article
        .create({ name, manufacturer, description, color, price, articleImg, screen, processor, ram, date })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getArticleDetails = (req, res, next) => {

    const { article_id } = req.params

    Article
        .findById(article_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteArticle = (req, res, next) => {

    const { article_id } = req.params

    Article
        .findByIdAndDelete(article_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editArticle = (req, res, next) => {

    const { article_id } = req.params
    const { name, manufacturer, description, color, price, articleImg, screen, processor, ram } = req.body

    Article
        .findByIdAndUpdate(article_id, { name, manufacturer, description, color, price, articleImg, screen, processor, ram })
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    getArticles,
    newArticle,
    getArticleDetails,
    deleteArticle,
    editArticle
}