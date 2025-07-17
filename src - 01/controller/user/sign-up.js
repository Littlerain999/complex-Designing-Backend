const { validation, getHashes, insert } = require("../../functions/sign-up");
const { user } = require("../../validation/index");

module.exports = async (req, res, next) => {
    try {
        const data = req.body;
        const { error, value } = await user.validate(data);

        if (!error) {
            const { password, ...others } = value;

            const hashPassword = await getHashes(password);
            
            const user = await insert({ ...others, password: hashPassword });
            
            res.status(200).send({ message: "User created Successfully", user});
        }
        else {
            console.log(error)
            res.status(400).send(error.message)
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send("ERROR executing sign-up function", err.message)
    }
}