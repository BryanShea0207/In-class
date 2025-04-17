const model = require('../models/products')
const expreess = require('express')
const router = expreess.Router()

router
    .get('/', (req, res, next) => {

        model.getAll().then((data) => {
            res.send(data)
        }).catch(next) 
    })
    .get('/:id', async (req, res, next) => {
        const { id } = req.params

        model.get(id).then((data) => [
            res.send(data)
        ]).catch(next)
    })
    .post('/', (req, res, next) => {
        const newValues = req.post

        model.create(newValues).then((data) => {
            res.status(201).send(data)
        }).catch(next)
    })
    .patch('/:id', (req, res, next) => {
        const { id } = req.params
        const newValues = req.body

        model.update(id, newValues).then((data) => {
            res.send(data)
        }).catch(next)

    })
    .delete('/:id', (req, res, next) => {
        const { id } = req.params

        model.remove(id).then((data) => {
            res.send(data)
        }).catch(next)
    })
    .get('/search/:query', (req,res,next) => {

    })
    .post('/seed', (req,res,next) => {
        const {data} = req.body

        
    }
    )
module.exports = router