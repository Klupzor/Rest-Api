    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var TaskSchema = Schema({
        title: String,
        description: String,
        status: Boolean

    })


     module.exports = db.model('task', TaskSchema)
    
    
