const { SellerModel } = require('../../../models')

const returnData = data => {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        genre: data.genre,
        nickName: data.nickName,
        genderTatoo: data.genderTatoo,
    }
}

async function add(data) {
    const create = await SellerModel.create(data)
    return returnData(create)
}

async function list() {
    const listAll = await SellerModel.find({ isDeleted: false })
    return listAll
}

module.exports = {
    add,
    list
}