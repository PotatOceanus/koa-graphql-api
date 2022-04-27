const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    username: String,
    password: String,
    age: Number,
    email: String,
    sign_up_date: Date
})

module.exports = mongoose.model('Users', UsersSchema,'users');