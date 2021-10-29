const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url)
    console.log('db connacted')
}
module.exports = connectDB