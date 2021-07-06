const mongoose = require('mongoose')
require('dotenv').config()

function connectDB() {
    // database connection
    mongoose.connect(process.env.MONGO_URL_CONNECTION, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    
    const connection = mongoose.connection
    connection.once('open', () => {
        console.log('Database connected')
    }).catch(err => {
        console.log('connection failed')
    })
}
module.exports = connectDB