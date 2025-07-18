const validation = require("../validation/product")
const productModel = require("../model/product.model")
const { Types } = require("../configuration")
module.exports = {
    create:  async (req, res, next) => 
            {
                try {

                    req.body.productOf = new Types.ObjectId(req.body._id)

                    const { error, value } = validation.validate(req.body, { allowUnknown: true })

                    if (!error) {
                        const product = await productModel.create(value)
                        res.status(200).send("Success")

                    } else {
                        res.status(400).send({"Failure": error.message})
                    }
                }
                catch (err) {
                    console.log(err)
                    res.status(500).send({"Failure": err.message})
                }
            }
}