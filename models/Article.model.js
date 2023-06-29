const { Schema, model } = require("mongoose")

const articleSchema = new Schema(

    {
        title: {
            type: String,
            required: [true],
            trim: true
        },

        description: {
            type: String,
            required: [true]
        },

        articleImg: {
            type: String,
            default: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        },

        date: {
            type: Date,
            default: Date.now
        },
    },
    {
        timestamps: true
    }

)

const Article = model("Article", articleSchema)

module.exports = Article