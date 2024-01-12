import mongoose from 'mongoose'

interface UserProps {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    picture: String
    role: String,
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['ADMIN', 'QUALITY', 'ADMISSION', 'FLOOR', 'USER' ],
        required: false,
        default: 'USER'
    }
}, { timestamps: true })

export const User = mongoose.models?.Users || mongoose.model("Users", userSchema)