const mongoose = require('mongoose')

let db

module.exports = function Connection(){
    
    if (!db) {
        mongoose.connect('mongodb://klupzor:12345qwer@ds135810.mlab.com:35810/test-api-glumsus')
        db = mongoose.connection
    }

    return db
}