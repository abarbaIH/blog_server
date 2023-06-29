const { response } = require('../app')
const Article = require('./../models/Article.model')

const getArticles = (req, res, next) => {
    setTimeout(() => {
        Article
            .find()
            // .limit(3)
            .then(response => res.json(response))
            .catch(err => next(err))
    }, 1000)

}

const newArticle = (req, res, next) => {

    const { title, description, articleImg, date } = req.body

    Article
        .create({ title, description, articleImg, date })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getArticleDetails = (req, res, next) => {
    setTimeout(() => {
        const { article_id } = req.params

        Article
            .findById(article_id)
            .then(response => res.json(response))
            .catch(err => next(err))
    }, 1000)

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
    const { title, description, articleImg, date } = req.body

    Article
        .findByIdAndUpdate(article_id, { title, description, articleImg, date })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const searchArticle = (req, res, next) => {
    const { search } = req.params;
    Article
        .find({
            "$or": [
                { "title": { "$regex": search, "$options": "i" } },
                { "description": { "$regex": search, "$options": "i" } }
            ]
        })
        .sort({ date: -1 })
        .then(response => res.json(response))
        .catch(err => next(err));
}

module.exports = {
    getArticles,
    newArticle,
    getArticleDetails,
    deleteArticle,
    editArticle,
    searchArticle
}