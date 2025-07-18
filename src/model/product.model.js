const { model, Schema, Types } = require("../configuration");

module.exports = model("product", new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: Types.ObjectId,
        ref: "category"
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    brand: {
        type: String,
        required: true
    },

    size: {
        type: [String]
    },

    color: { Type: String },

    productOf: {
        type: Types.ObjectId,
        ref: "users"
    }
},{
    timestamps: true
}))