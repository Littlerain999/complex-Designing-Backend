const { router } = require("./configuration")
const user = require("./routers/user")
const routers = [{
    path: '/user', router: user
}]


module.exports = routers.map((el) => router.use(el.path, el.router))