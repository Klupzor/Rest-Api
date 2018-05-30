const express = require('express')
const path = require('path')
const app = express()
const morgan = require ('morgan')

const indexRoutes = require('./routes/index.js')
const registerRoutes = require ('./routes/register.js')


// settings 
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/', indexRoutes)
app.use('/reg', registerRoutes)


//static files
// app.use(express.static(path.join(__dirname, 'dist')))


app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
})