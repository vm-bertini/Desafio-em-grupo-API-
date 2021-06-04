const express = require ('express')
const json = require ('./database-simulador.json')
const app = express()

app.listen(3000, function() {
    console.log('Server is running')
});