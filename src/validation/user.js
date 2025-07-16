const { Joi } = require("../configs/configurations")
module.exports = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required()
});