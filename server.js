const express = require ('express')
const json = require ('./database-simulador.json')
const app = express()

app.get("/produtos", (req, res) => {
    res.send(json)
});
app.get("/produtos/:id", (req, res) => {
    res.send()
})
app.put("/produtos")
app.post("/produtos")
app.get("/departamento", (req, res) => {
    res.send()
})
app.get("/departamento", (req, res) => {
    res.send()
})

app.listen(3000, function() {
    console.log('Server is running')
});