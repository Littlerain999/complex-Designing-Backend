const {joi} = require("../configuration")

module.exports = joi.object({
    title: joi.string().trim().required(),
    
    category: joi.string().optional(),

    price: joi.number().required(),

    description: joi.string().required(),

    brand: joi.string().required(),

    size: joi.array().items(joi.string()),

    color: joi.string().optional(),

    productOf: joi.optional()
});