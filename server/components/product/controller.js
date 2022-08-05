const store = require('./store')

async function createOne(data) {
    return store.add(data)
}

async function getAll() {
    return store.getAll()
}

module.exports = {
    createOne,
    getAll
}