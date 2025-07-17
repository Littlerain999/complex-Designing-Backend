const { Schema, model, models } = require("../configs/configurations");
module.exports = model("User", new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: async (value) => {
                if(await models.User.findOne({ email: value })) return false;
            },
            message: "Email already in use"
        }
    },

    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
}));