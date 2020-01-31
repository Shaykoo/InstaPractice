const express = require('express')
const path = require('path')
const hbs = require('hbs')
const server = express()

const port = process.env.PORT || 6969
const userRouter = require('./routers/user')

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

//Define path for express config
const publicDirPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname ,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')

//Setup handlebars engine and views location
server.set('view engine', 'hbs') // for not writing .hbs extension over and over again
server.set('views', viewsPath)  // setting for full fledged html pages
hbs.registerPartials(partialsPath) // setting for the partials

//setup static directory to serve
server.use(express.static(publicDirPath))

server.use(userRouter) // for registering the Router functionaliy in this app

server.listen(port, (req, res)=>{
    console.log(`The server is running at ${port}`)
})