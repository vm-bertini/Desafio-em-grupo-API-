const express = require ('express')
const produtos = require ('./recursos/produtos.json')
const departamentos = require ('./recursos/departamentos.json')
const app = express()

app.get ('/produtos', async(req, res) =>{
    return res.status(200).json(produtos)
})

app.listen(3000, function() {
    console.log('Server is running')
});