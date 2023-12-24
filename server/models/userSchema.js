const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    sectors: {
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;