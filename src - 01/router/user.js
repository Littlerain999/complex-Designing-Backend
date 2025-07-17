const { router } = require("../configs/configurations.js");
const { User } = require("../controller/index.js");

router.post("/sign-up", User.signUp);

module.exports = router;
