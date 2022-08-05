const { ProductsModel } = require('../../models')
const { find } = require('../../models/product')

const returnData = data => {
    return {
        name: data.name,
        price: data.price,
        gender: data.gender,
        description: data.description
    }
}

async function add(data) {
    const createProduct = await ProductsModel.create(data)
    return returnData(createProduct)
}

async function getAll() {
    const getAll = await ProductsModel.find({ isDeleted: false })
    return getAll
}
module.exports = {
    add,
    getAll
}