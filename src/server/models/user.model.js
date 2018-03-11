let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let user = new Schema({
    username: String,
    password: String,
    email: String
})


module.exports = mongoose.model('user', user)