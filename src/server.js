const express = require ('express')
var produtos = require ('./recursos/produtos.json')
var departamentos = require ('./recursos/departamentos.json')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.json())

app.get ('/produtos', async(req, res) =>{
    return res.status(200).json(produtos)
});
app.get ('/produtos/:id', async(req,res)=>{
    const { id } = req.params
    for (let produto of produtos){
        if (produto.id == id){
            return res.status(202).json([produto])
        }
    }
    const response = {
        status: 404,
        mensagem: 'Not-Found'
    }
    return res.status(404).json(response)
})

app.get ('/departamentos', async(req, res) =>{
    return res.status(200).json(departamentos)
})

app.get ('/departamentos/:id', async(req,res)=>{
    const { id } = req.params
    for (let departamento of departamentos){
        if (departamento.id == id){
            return res.json([departamento])
        }
    }
    const response = {
        status: 404,
        mensagem: 'Not-Found'
    }
    return res.status(404).json(response)
})

app.post('/produtos', async(req,res)=>{
    const resposta = req.body
    for (let i of resposta){
        if (i.id == 0 || i.descricao === undefined|| i.preco === 0|| i.estoque === undefined|| i.disponivel != true && i.disponivel != false|| i.destaque != true && i.destaque != false || i.departamento_id == 0 )
        {
        return res.status(400)
        }
    }
    produtos = produtos.concat(resposta);
    return res.status(202).json(resposta)
})
app.put('/produtos/:id', async(req,res)=>{
    const resposta = req.body
    const { id } = req.params
    for (let i of resposta){
        if (i.id == 0 || i.descricao === undefined|| i.preco === 0|| i.estoque === undefined|| i.disponivel != true && i.disponivel != false|| i.destaque != true && i.destaque != false || i.departamento_id == 0 )
        {
            const response = {
                status: 400,
                mensagem: 'Bad-Request'
            }
            return res.status(400).json(response)
        }
    }
    for (let produto of produtos){
        if (produto.id == id){
            produto.id = resposta[0].id
            produto.estoque = resposta[0].estoque
            produto.disponivel = resposta[0].disponivel
            produto.destaque = resposta[0].destaque
            produto.departamento_id = resposta[0].departamento_id
            return res.status(202).json(produtos)
        }
        
}
const response = {
    status: 404,
    mensagem: 'Not-Found'
}
return res.status(404).json(response)});

app.get('*', (async(req,res)=>{
    return res.status(404)
}))
app.listen(3000, function() {
    console.log('Server is running')
});