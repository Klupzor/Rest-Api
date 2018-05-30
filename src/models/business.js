var db = require('../libs/db-connection')();
var Schema = require('mongoose').Schema;

var BusinessSchema = Schema({
    name: String,
    type: String, //res,dis,bar
    status: { type: boolean, default: true },
    created: { type: Date, default: Date.now },
    panel: String,

})


 module.exports = db.model('negocio', BusinessSchema)

