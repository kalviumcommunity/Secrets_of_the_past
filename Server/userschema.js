const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const userInfo = mongoose.model("user-collections", userSchema); 

module.exports = userInfo;
