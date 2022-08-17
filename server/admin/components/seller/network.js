const controller = require('./controller')
const express = require('express')
const router = express.Router()

router.post("/", function (req, res) {
    controller.createOne(req.body)
        .then((data) => {
            res.status(200).json({
                error: false,
                body: data,
                status: 200,
                message: 'Vendedor Creado'
            })
        })
})

router.get("/", function (req, res) {
    controller.getAll()
        .then((data) => {
            res.status(200).json({
                error: false,
                body: data,
                status: 200,
                message: 'todos los Vendedores'
            })
        })
})

module.exports = router