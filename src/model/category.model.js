const { Schema, model }=require("../configuration")

module.exports = model("category", new Schema({
    title: {
        type: String,
        required: true
    }
}))