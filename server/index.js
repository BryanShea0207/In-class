//Load the http module to create an http server.
const expreess = require('express')
const productsController = require('./controllers/products')
const PORT = 8000
const e = require('express');


const app = expreess()

//Middleware
//controller 
app.use(expreess.json())

app
    .get('/hello', (req, res) => {
        res.send('Hello New Paltz, New York')
    })
    .use('/api/v1/products', productsController)
    .use('/', expreess.static('dist'));

app
    .use((err, req, res, next, )=> {
        console.error(err)
        const status = err.status || 500

        const error = {
            status,
            message: err.message || 'Internal Server Error'
        }
        res.status(status).send(error)
    })

//Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)

});

/*
    Asynchronous patterns in Node.js
    1. Callbacks
    2. Pipeline
    3. Promises
    4. Async/Await
*/

console.log('Hello, world!')

/*
ways to send data to the server
1.Query parameters: ?name=John&age=30
2.PATH Parameters: /users/123
3.request body:
    1. form data
    2. JSON data
4. headers
    cookies
*/

/*
parts of a URL
1. protocol: http(s)
2. Domain: www.example.com
3. Port: :80(http) or :443(https)
4. Path: /path/to/resource
5. Query parameters: ?name=John&age=30
6. Fragment: #section1

example: https://www.example.com:90/path/to/resource?name=John&age=30#section1
         protocol :// domain : port / paths ? Query # Fragment
*/

/*
Module Types
1. CommonJS: 
    import: require('module')
    export: module.exports = { module }
2. ES6
    import: import { module } form 'module'
    export: export { module }
*/

