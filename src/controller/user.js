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
        },
    login: async function(req, res, next) 
        {
            try {
                const data = req.body
                const { error, value } = validation.login.validate(data)

                if (!error) {
                    const { username, password } = value
                    const user = await models.user.findOne({ username })

                    if(user) {
                        const isCorrect = await compare(password, user.password)

                        if(isCorrect) {
                            const object = user.toObject()
                            delete object.password

                            const token = await sign(object, jwtSecret )

                            res.status(200).send({
                                message: "Login Successfull",
                                token
                            })
                        } else {
                            res.status(404).send({
                                message: "Incorrect password"
                            })
                        }
                        
                    } else {
                        res.status(404).send({
                            message: "Username not found"
                        })
                    }
                } else {
                    res.status(500).send(error.message)
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
}