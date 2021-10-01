const express = require('express')
const { v4: uuid } = require('uuid')

const router = express.Router()

// Métodos HTTP
/*
    GET: Obtem dados
    POST: Cria dados
    PUT: Altera dados
    DELETE: Apaga dados
*/

/* Informações para o Produtos
  produto: 
    nome, 
    descricao,
    valor,
*/

const produtos = []

// GET / => Retorna todos os produtos
router.get('/produtos', (request, response) => {
  /* 	#swagger.tags = ['Produto']
        #swagger.description = 'Endpoint para returnar todos os produtos' */

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Produto" },
      description: "Produtos returnado com sucesso" } */
  return response.send(produtos)
})

// GET / => Retorna um produtos com base no id
router.get('/produtos/:id', (request, response) => {
  /* 	#swagger.tags = ['Produto']
        #swagger.description = 'Endpoint para returnar um produto pelo id' */

  const id = request.params.id

  const produtoIndex = produtos.findIndex((produto) => {
    return produto.id === id
  })

  if (produtoIndex === -1) {
    return response.status(404).send({ mensagem: 'Produto não encontrado' })
  }

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Produto" },
      description: "Produto returnado com sucesso" } */
  return response.send(produtos[produtoIndex])
})

// POST / => Cria um novo produto
router.post('/produtos', (request, response) => {
  /* 	#swagger.tags = ['Produto']
        #swagger.description = 'Endpoint para crair um novo produto' */
  const dados = request.body

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Dados para cria um novo produto',
            required: true,
            schema: { $ref: "#/definitions/AddProduto" }
    } */

  produtos.push({
    id: uuid(),
    ...dados,
  })

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/AddProdutoSucess" },
      description: "Produto cadastrado com sucesso!" } */
  return response.json({ mensagem: 'Produto cadastrado com sucesso!' })
})

// PUT / => Atualiza um produto com base no id
router.put('/produtos/:id', (request, response) => {
  /* 	#swagger.tags = ['Produto']
        #swagger.description = 'Endpoint para atualziar um produto pelo id' */
  const id = request.params.id
  const dados = request.body

  const produtosIndex = produtos.findIndex((produto) => {
    return produto.id === id
  })

  if (produtosIndex === -1) {
    return response.status(404).send({ mensagem: 'Produto não encontrado' })
  }

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Dados para atualziar um produto pelo id',
            required: true,
            schema: { $ref: "#/definitions/AddProduto" }
    } */
  produtos[produtosIndex] = {
    id,
    ...dados,
  }

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/UpdateProdutoSucess" },
      description: "Produto atualizado com sucesso" } */
  return response
    .status(200)
    .send({ mensagem: 'Produto atualizado com sucesso' })
})

// DELETE / => Apaga um produto com base no id
router.delete('/produtos/:id', (request, response) => {
  /* 	#swagger.tags = ['Produto']
        #swagger.description = 'Endpoint para apagar um produto pelo id' */
  const id = request.params.id

  const produtoIndex = produtos.findIndex((produto) => {
    return produto.id === id
  })

  if (produtoIndex === -1) {
    return response.status(404).send({ mensagem: 'Produto não encontrado' })
  }

  produtos.splice(produtoIndex, 1)

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Produto" },
      description: "Produto apagado com sucesso!" } */
  return response.json({ mensagem: 'Produto apagado com sucesso!' })
})

module.exports = router
