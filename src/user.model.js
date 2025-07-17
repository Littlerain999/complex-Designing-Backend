const { Schema, model, client, admin, models }=require("./configuration")

module.exports = model("user", new Schema({
    username: {
        type: String, required: true, trim: true,
        validate: {
            validator: async (value) => { if(await models.user.findOne({ username: value })) return false },
            message: "username already taken"
        }
    },

    email: {
        type: String, required: true, trim: true,
        validate: {
            validator: async (value) => { if(await models.user.findOne({ email: value })) return false },
            message: "email already in use"
        }
    },

    password: {
        type: String, required: true, trim: true
    },

    role: {
        type: String, enum: [client, admin], default: client
    }
}, { timestamps:true }))