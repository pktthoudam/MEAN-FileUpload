const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true,
    },
    avatar: {
        type: String
    }
})

const userModel = mongoose.model("userModel", usersSchema);

module.exports = userModel;