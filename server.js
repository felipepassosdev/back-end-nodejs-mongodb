const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('How are you? I am fine, thanks')
})

app.listen(3001)
