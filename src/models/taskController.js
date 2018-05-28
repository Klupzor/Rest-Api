var task = require('./task.js')


var guardar = (req, res) => {
    var tarea = new task({
        title: 'primer tarea',
        description: 'Mi primera tarea en mongo'
    })
    
    tarea.save((err, data) => {
        if (err) return console.error(err)
            res.redirect('/')
    })

}

module.exports = guardar