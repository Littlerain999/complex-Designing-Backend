const { router, models, compare, sign, jwtSecret } = require("../configuration")
const validation = require("../validation/user")

const controller = require("../controller/user")

router.post("/sign-up", controller.signUp)

router.post("/login", controller.login)

module.exports = router;