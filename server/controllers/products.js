const expreess = require('express')
const router = expreess.Router()

router
    .get('/', (req, res) => {
        res.send([
            {
                id: 1,
                name: 'Product 1',
                price: 10.99
            },
            {
                id: 2,
                name: 'Product 2',
                price: 20.99       
            },
            {
                id: 3,
                name: 'Product 3',
                price: 30.99
            }])
    })
    .get('/:id', (req,res) => {
        const { id } = req.params

        res.send({
            id,
            name: `Product ${id}`,
            price: 10.99 * id
        })
    })
    .post('/', (req,res) => {
        const { name, price } = req.post

        
    })

module.exports = router