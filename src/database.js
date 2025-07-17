const {
    port, uri, connect
}=require("./configuration")

function createServer(app) { app.listen(port, () => console.log(`server listening at port: ${port} [200]`)); return "" }

module.exports = (app) => connect(uri)
                            .then(() => console.log("connection to database [200]", createServer(app)))
                            .catch((err) => console.error("error: ", err))