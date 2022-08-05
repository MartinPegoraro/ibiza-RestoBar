const store = require('./store')

async function createOne(data) {
    return store.add(data)
}

async function getAll() {
    return store.getAll()
}

async function getOne(id){
    return store.getOne(id)
}

module.exports = {
    createOne,
    getAll,
    getOne
}