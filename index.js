const express = require('express')
const app = express()
require('dotenv').config
const port = process.env.SERVER_PORT || 3456
const cors = require('cors')
const path = require('path')

const clientpath = path.join(__dirname, './client/dist')
app.use('/', express.static(clientpath))


app.use(express.json())
app.use(cors())

app.use('/api', require('./api/users/router'))
app.use('/api', require('./api/products/router'))
app.use('/api', require('./api/brands/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/orders/router'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})   