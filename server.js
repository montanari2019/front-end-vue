const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')


const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))


const porta = process.env.PORT || port
app.listen(porta)

console.log("Server start: " + porta)