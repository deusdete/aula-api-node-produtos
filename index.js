const express = require('express')
const router = require('./routes')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


const server = express()

server.use(express.json())

server.use(router)

server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const post = process.env.PORT || 3000

server.listen(post, () => {
  console.log(`Server rodando na porta => ${post} 🚀`)
})
