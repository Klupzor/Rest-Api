const express = require ('express')
const router = express.Router();
const Task = require('../models/task')


router.get('/', (req, res) => {

    // res.send('hola')
    Task.find((err, tasks) => {
        if (err) return console.error(err)
        // console.log(tasks)
        res.json(tasks)

    })
})

router.post('/', (req, res) => {
    let body = req.body

    Task.create(body, (err, task) => {
        if (err) return console.error(err)
        // res.json(post)
        res.send('guardado')
    })

})

module.exports = router;