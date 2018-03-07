
let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let message = new Schema({
    title: String,
    name: String,
    company: String,
    email: String,
    tel: String,
    product: String,
    message:String
})

module.exports = mongoose.model('message', message)