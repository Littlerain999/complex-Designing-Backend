const { router } = require("../configs/configurations.js");
const { routerCls } = require("../class/router.js");

const routers = [
    new routerCls("/user", require("./user.js"))
];

routers.map(el => {
    router.use(el.path, el.router)
})

module.exports = router;