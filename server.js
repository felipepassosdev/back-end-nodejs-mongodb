const express = require('express')
const mongoose = require('mongoose')

// STARTING APP
const app = express()

// STARTING BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
)

// FIRST ROUTE
app.get('/', (req, res) => {
    res.send('How are you? I am fine, thanks')
})

// LISTENING APP
app.listen(3001)

