const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.post("/", function (req, res) {
    controller.createOne(req.body)
        .then((data) => {
            res.status(200).json({
                error: false,
                body: data,
                status: 200,
                message: 'producto creado con exito'
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
                message: 'Productos'
            })
        })
})

router


module.exports = router