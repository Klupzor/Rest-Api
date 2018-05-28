const express = require ('express')
const router = express.Router();

const model = require('../models/task')()

var datos = new model({
    title: 'primera tarea',
    description: 'primera tarea en mongo',
    status: true
})

router.get('/', (req, res) => {

    res.send('hola')
    model.find((err, tasks) => {
        if (err) return console.error(err)
        console.log(tasks)

    })
})

router.post('/', (req, res) => {
    let body = req.body

    datos.save((err, task) => {
        if (err) return console.error(err)
        res.redirect('/')
    })

})

module.exports = router;