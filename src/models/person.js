    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var PersonSchema = Schema({
        user: {         //usuario que se usa para el link del negocio
            type: String,
            lowercase: true
        },
        created: { type: Date, default: Date.now },
        emailPerson: {type: String, lowercase: true},
        namePerson: String,
        phonePerson: Number,
        password: String,


    })


     module.exports = db.model('person', PersonSchema)
    
    
