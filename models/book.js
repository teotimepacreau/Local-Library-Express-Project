const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {//ObjectId est un ID unique généré automatiquement par mongoose,we are sing Schema.Types.ObjectId to define a reference to author.js
        type: Schema.Types.ObjectId, ref: "Author",
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },// Using Schema.Types.ObjectId to define a reference to Genre.js
    genre: [{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }]
})

// Virtual for book's URL
BookSchema.virtual("url").get(function(){
    return `/catalog/book/${this._id}`
})

module.exports = mongoose.model("Book", BookSchema)