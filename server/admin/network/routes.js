const product = require('../components/product/network')
const seller = require('../components/seller/network')

const routes = function (server) {
    server.use('/product', product),
        server.use('/seller', seller)
}
module.exports = routes