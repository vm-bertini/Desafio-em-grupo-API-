# Construindo uma API para consumo do Banco de Dados !

## API

Acronimo de Application Programming Interface (Interface de Programação de aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.

## REST

Um acrônimo para Representational State Transfer (Transferência de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

- Atransferência de dados, geralmente, usando o protocolo HTTP.

- O Rest, delimita algumas obrigações nessas transfeências de dados.

- Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e REact Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviçoes, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará liando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o Javascript, por exemplo, e executar no cliente;

## RESTFUL

RESTful, é a aplicação dos padrões REST.



## Dependências

express 
body-Parse

## Clonando o repositório


No CMD, digite o comando

```
clone https://github.com/vm-bertini/Desafio-em-grupo-API-.git
```

## Instalando as dependências

   npm install express 
   npm install --save body-parser
    

## Executando a aplicação

   npm run start

## **Host e porta**

<localhost:3000>


### **Método GET**

Retorna a lista de todos os produtos existentes. Uma lista em formato JSON contendo todos os produtos da tabela.

### **URL**

localhost:3000/produtos`

### **Requisição**

`/produtos`

### **Resposta**

app.use(bodyParser.json())

app.get ('/produtos', async(req, res) =>{
    return res.status(200).json(produtos)
})


### **Método GET**

Retorna os detalhes de 1 único produto. Um único objeto JSON recuperado a partir do ID fornecido como componente da URL

### **URL**

localhost:3000/produtos/:id

### **Requisição**

/produtos/:id

### **Resposta**

app.get ('/produtos/:id', async(req,res)=>{
    const { id } = req.params
    for (let produto of produtos){
        if (produto.id == id){
            return res.json([produto])
        }
    }
})

### **Método POST**
	
Recebe um JSON com dados de um produto e o inclui na base de dados. Retorna para o usuário o Objeto que foi incluído na tabela

### **URL**

localhost:3000/produtos

### **Requisição**

/produtos

### **Resposta**

app.post('/produtos', async(req,res)=>{
    const resposta = req.body
    console.log (produtos)
    for (let i of resposta){
        if (i.id == 0 || i.descricao === undefined|| i.preco === 0|| i.estoque === undefined|| i.disponivel != true && i.disponivel != false|| i.destaque != true && i.destaque != false || i.departamento_id == 0 )
        {
        return res.status(400)
        }
    }
    produtos = produtos.concat(resposta);
    return res.status(202).json(resposta)
})


### **Método PUT**

Recebe um JSON com dados de um produto, cujo ID é especificado na URL e atualiza seus dados na base de dados.

### **URL**

localhost:3000/produto/{id}

### **Requisição**

/produto/{id}

### **Resposta**

app.put('/produtos/:id', async(req,res)=>{
    const resposta = req.body
    const { id } = req.params
    for (let produto of produtos){
        if (produto.id == id){
            produto.id = resposta[0].id
            produto.estoque = resposta[0].estoque
            produto.disponivel = resposta[0].disponivel
            produto.destaque = resposta[0].destaque
            produto.departamento_id = resposta[0].departamento_id
            return res.status(202).json(produto)
        }
        else{
            continue
        }
    return res.status(400)
}
})

### **Método GET**

Retorna a lista de todos os departamentos

### **URL**

localhost:3000/departamentos

### **Requisição**

/departamentos

### **Resposta**

app.get ('/departamentos', async(req, res) =>{
    return res.status(200).json(departamentos)
})


### **Método GET**

Retorna o departamento e a lista de produtos que estão associadas a ele. Se o departamento não exisitir na base de Dados, retorna um status 404 - Not Found,

### **URL**

localhost:3000/departamentos/:id

### **Requisição**

/departamentos/:id

### **Resposta**

app.get ('/departamentos/:id', async(req,res)=>{
    const { id } = req.params
    for (let departamento of departamentos){
        if (departamento.id == id){
            return res.json([departamento])
        }
    }
})
