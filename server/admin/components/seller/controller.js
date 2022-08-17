const store = require('./store')

async function createOne(data) {
    return store.add(data)
}

async function getAll() {
    return store.list()
}

module.exports = {
    createOne,
    getAll
}