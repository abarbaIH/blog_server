const { Schema, model } = require("mongoose")

const articleSchema = new Schema(

    {
        title: {
            type: String,
            required: [true],
            trim: true
        },
        content: {
            type: String,
            required: [true]
        },
        date: {
            type: Date,
            default: Date.now
        },
        articleImg: {
            type: String,
            default: "default.png"
        }
    },
    {
        timestamps: true
    }

)

const Article = model("Article", articleSchema)

module.exports = Article