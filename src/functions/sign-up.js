const { Bcrypt } = require("../configs/configurations");
const { User } = require("../model/index");

module.exports = {
    getHashes: (value) => Bcrypt.hash(value, Number(process.env.SALTS)),
    insert: (value) => User.create(value)
}