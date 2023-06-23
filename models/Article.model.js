const { Schema, model } = require("mongoose")

const articleSchema = new Schema(

    {
        name: {
            type: String,
            required: [true],
            trim: true
        },
        manufacturer: {
            type: String,
            required: [true],
            trim: true
        },
        description: {
            type: String,
            required: [true]
        },
        color: {
            type: String,
            required: [true]
        },
        price: {
            type: Number,
            required: [true]
        },
        articleImg: {
            type: String,
            default: "default.png"
        },
        screen: {
            type: String,
            required: [true]
        },
        processor: {
            type: String,
            required: [true]
        },
        ram: {
            type: String,
            required: [true]
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