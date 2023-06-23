const Article = require('./../models/Article.model')

const test = (req, res, next) => {
    return res.status(200).json({
        mensaje: "soy una accion de prueba en nuestro controller"
    })
}

const getArticles = (req, res, next) => {
    Article
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
}

const newArticle = (req, res, next) => {
    Article
        .create()

}

module.exports = {
    getArticles,
    test
}