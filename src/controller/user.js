const userModel = require("../user.model")
const validation = require("../validation/user")
const { hash, salts } = require("../configuration")

module.exports = {
    signUp: async function(req, res, next) 
        {
            try {
                const data = req.body
                
                const { error, value } = validation.signUp.validate(data)
                
                if (!error) {
                    const { password, ...others } = value
                    const hashes = await hash(password, salts)

                    const user = await userModel.create({ ...others, password: hashes })
                    res.status(200).send(user)
                }

            }
            catch (err) {
                console.log(err)
                res.status(500).send(err.message)
            }
        }
}