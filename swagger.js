const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'API simples com um CRUD para produtos',
    description:
      'API criada e disponibilizada para o desafio do curso de programação na ETEPPF por Deusdete Ferreira',
  },
  basePath: '/produtos',
  host: 'localhost:3000',
  schemes: ['http', 'https'],

  definitions: {
    Produto: {
      $id: 'f4b799f4-4917-42bb-a286-a551098bccfb',
      $nome: 'Notebook Lenovo Ideapad ',
      $descricao:
        'Notebook Lenovo Ideapad S145 81V70008BR - AMD Ryzen 5-3500U 8GB 256GB SSD 15,6” Windows 10',
      valor: '3.599,10',
    },
    AddProduto: {
      $nome: 'Notebook Lenovo Ideapad ',
      $descricao:
        'Notebook Lenovo Ideapad S145 81V70008BR - AMD Ryzen 5-3500U 8GB 256GB SSD 15,6” Windows 10',
      valor: '3.599,10',
    },
    AddProdutoSucess: {
      $id: 'f4b799f4-4917-42bb-a286-a551098bccfb',
      $nome: 'Notebook Lenovo Ideapad ',
      $descricao:
        'Notebook Lenovo Ideapad S145 81V70008BR - AMD Ryzen 5-3500U 8GB 256GB SSD 15,6” Windows 10',
      valor: '3.599,10',
    },
    UpdateProduto: {
      $nome: 'Notebook Lenovo ',
      $descricao:
        'S145 81V70008BR - AMD Ryzen 5-3500U 8GB 256GB SSD 15,6” Windows 10',
      valor: '3.000,10',
    },
    UpdateProdutoSucess: {
      $id: 'f4b799f4-4917-42bb-a286-a551098bccfb',
      nome: 'Notebook Lenovo ',
      $descricao:
        'S145 81V70008BR - AMD Ryzen 5-3500U 8GB 256GB SSD 15,6” Windows 10',
      valor: '3.000,10',
    },
  },
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index') // Your project's root file
})
