const express = require ('express')
const router = express.Router();
const Business = require('../models/business')

//   SAVE Business .........................
router.post('/', (req, res) => {
    let body = req.body

    Business.create(body, (err, task) => {
        if (err) return console.error(err)
        // res.json(body)
        res.send('guardado')
    })

})

module.exports = router

