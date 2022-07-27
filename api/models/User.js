const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profile: {
        fullName: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        sex: {
            type: String,
            default: "",
        },
        avata:{
            type: String,
            default: "",
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);