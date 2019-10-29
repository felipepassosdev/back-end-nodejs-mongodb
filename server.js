// Back-end NodeJS com MongoDB, usando também Express(para as rotas) e nodemon(ver alterações e reiniciar o servidor),  
// Mongoose (solução baseada em esquemas para modelar os dados da sua aplicação), 
// Require-dir(faz o papel de require, EX: com ele não é necessário fazer require de todos os models)

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// STARTING APP
const app = express()

// STARTING BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
)
requireDir('./src/models/')

const Product = mongoose.model('Product')

// FIRST ROUTE
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url : 'https://facebook.github.io/react-native/'
    })

    return res.send('How are you? I am fine, thanks')
})

// LISTENING APP
app.listen(3001)

