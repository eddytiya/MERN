const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;