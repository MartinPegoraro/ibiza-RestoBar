const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })

const config = {
    dev: process.env.NODE_ENV !== 'production',
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    server: {
        host: process.env.SERVER_HOST,
        port: process.env.SERVER_PORT,
    }
}

module.exports = config