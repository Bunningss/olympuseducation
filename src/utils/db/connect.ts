import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL || '')
    } catch (err) {
        return new Response("Failed to connect to DB!")
    }
}

export default connectDb