const express = require('express')
const path = require('path')
const app = express()

const indexRoutes = require('./routes/index.js')


// settings 
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes)

//static files
// app.use(express.static(path.join(__dirname, 'dist')))


app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
})