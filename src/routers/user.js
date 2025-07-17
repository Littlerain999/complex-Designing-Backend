const { router } = require("../configuration")
const validation = require("../validation/user")
const { hash } = require("../configuration")

const controller = require("../controller/user")

router.post("/sign-up", controller.signUp)

router.post("/login", async function(req, res, next) 
{
    try {
        const data = req.body
        const { error, value } = validation.login.validate(data)

        if (!error) {
            res.status(200).send("Success")
        }

    }
    catch (err) {
        console.log(err)
            res.status(500).send({
                message: "Failure",
                error: err.message
            })
    }
}
)

module.exports = router;