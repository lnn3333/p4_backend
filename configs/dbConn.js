const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nguyenlinh:Nhanjom@cluster0.olh0z3e.mongodb.net/find_ym_1")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB