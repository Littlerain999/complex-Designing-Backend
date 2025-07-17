console.clear()
console.log("")
console.log("================================================================================")
console.log("")

const { app } = require("./configuration")
const connection = require("./database")
const router = require("./router")

app.use(router)


connection(app)

