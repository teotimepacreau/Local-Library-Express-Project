// II. CREATE MONGOOSE SCHEMA AND MODEL

const { default: mongoose } = require("mongoose")

// Define a schema
const Schema = mongoose.Schema
// On définit les champs du schema :
const SomeModelSchema = new Schema({
  a_string: String,
  a_Date: Date
})

//  Transformer le schema en model :
const someModel = mongoose.model("SomeModel", SomeModelSchema)//le 1er argument c'est le nom qu'on donne à la collection, le 2nd argument c'est le schema qu'on veut utiliser pour créer le model

// Export to use elsewhere
module.exports = mongoose.model("SomeModel", SomeModelSchema)