const mongoose = require("mongoose");

const usersSchema  = {
    name: String,
    email: String,
    contactNumber: String,
    password: String,
    confPassword: String,
}

const User = mongoose.model("User", usersSchema);

module.exports = User;