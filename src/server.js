const express = require ('express')
const produtos = require ('./recursos/produtos.json')
const departamentos = require ('./recursos/departamentos.json')
const app = express()

app.get ('/produtos', async(req, res) =>{
    return res.status(200).json(produtos)
})
app.get ('/produtos/:id', async(req,res)=>{
    const { id } = req.params
    for (let produto of produtos){
        if (produto.id == id){
            return res.json([produto])
        }
    }
})

app.get ('/departamentos', async(req, res) =>{
    return res.status(200).json(departamentos)
})

app.listen(3000, function() {
    console.log('Server is running')
});