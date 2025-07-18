const { router } = require("../configuration")

const controller = require("../controller/user")

router.post("/sign-up", controller.signUp)

router.post("/login", controller.login)

module.exports = router;