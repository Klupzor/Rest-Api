var db = require('../libs/db-connection')();
var Schema = require('mongoose').Schema;

var BusinessSchema = Schema({
    name: String,
    type: String, //res,dis,bar
    status: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
    panel: [String], //ciudad
    user: {         //usuario que se usa para el link del negocio
        type: String,
        lowercase: true
    },
    email: {type: String, lowercase: true},
    phone: Number
})


 module.exports = db.model('Business', BusinessSchema)

