const { router } = require("./configuration")
const user = require("./routers/user")
const product = require("./routers/product")
const routers = [{
    path: '/user', router: user
}, {
    path: '/product', router: product
}]


module.exports = routers.map((el) => router.use(el.path, el.router))