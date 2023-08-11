const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    imprint: {
        type: String,
        required: true
    },
    status: {//enum in a special mongoose keyword : it allows to set the allowed values of a string
        type: String,
        required: true,
        enum:["Available", "Maintenance", "Loaned", "Reserved"],
        default: "Maintenance",
    },
    due_back: {//default is a special mongoose keyword to set something by default
        type: Date,
        default: Date.now
    }
})

BookInstanceSchema.virtual("url").get(function(){
    return `catalog/bookinstance/${this._id}`
})

module.exports = mongoose.model("BookInstance", BookInstanceSchema)