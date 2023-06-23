
const router = require("express").Router()

router.use("/articles", require('./articles.routes'))

module.exports = router