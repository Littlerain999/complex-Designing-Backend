const { router } = require("../configuration")
const controller = require("../controller/product")

// const controller = require("../controller/product")

router.post("/", 
    async (req, res, next) => {
        try {
            console.log(req.headers?.authorization?.split(" ")[1] || "empty")
            next()
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ "Failure": err.message })
        }
    }
    
    
    
    
    , controller.create)

// router.get("/", async (req, res, next) => {

// })

module.exports = router;