//Load the http module to create an http server.
const expreess = require('express')
const productsController = require('./controllers/products')
const PORT = 8000

const app = expreess()

app.get('/', (req, res) => {
    res.send('Hello New Paltz, New York')
}).use('/api/v1/products', productsController)

//Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

console.log('Hello, world!')

