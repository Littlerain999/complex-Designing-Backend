const { joi }=require("../configuration")
module.exports= {
    signUp: joi.object({
        username: joi.string().required().min(5),
        email: joi.string().required().email().valid(),
        password: joi.string().required().min(8)
    }),
    login: joi.object({
        username: joi.string().required().min(5),
        password: joi.string().required().min(8)
    })
}