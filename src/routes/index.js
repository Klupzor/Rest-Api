const express = require ('express')
const router = express.Router();
const Task = require('../models/task')
var mongoose = require('mongoose');


router.get('/', (req, res) => {
    Task.find((err, tasks) => {
        if (err) return console.error(err)
        res.json(tasks)
    })
})

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Task.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

//   SAVE PRODUCT .........................
router.post('/', (req, res) => {
    let body = req.body

    Task.create(body, (err, task) => {
        if (err) return console.error(err)
        // res.json(body)
        res.send('guardado')
    })

})

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
    //   res.json(post);
        res.send('Modificado!')
    
    });
  });

  /* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    Task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.send('borrado!')
      
    });
  });

module.exports = router;