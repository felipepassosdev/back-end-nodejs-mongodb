const express = require('express')

const routes = express.Router()

// FIRST ROUTE
routes.get('/', (req, res) => {
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url : 'https://facebook.github.io/react-native/'
    // })

    return res.send('How are you? I am fine, thanks')
})

module.exports = routes;