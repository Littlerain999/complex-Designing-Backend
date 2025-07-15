const { router } = require("./configs/configurations.js");

router.post("/sign-up", require("../controller/user/sign-up.js"));

module.exports = router;
