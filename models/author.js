const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    family_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    }
})

// SI JAMAIS L'AUTEUR N'A PAS DE PRENOM OU DE NOM ON RETOURNE UN FULLN STRING VIDE
AuthorSchema.virtual("name").get(()=>{
    let fullname = ""
    if(this.first_name && this.family_name){
        fullname = `${this.family_name}, ${this.first_name}`
    }
    return fullname
});