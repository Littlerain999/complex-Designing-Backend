const { createConnection } =  require("./functions/connection.js");
const { app, connect, config, express, cors } = require("./configs/configurations.js");

config()


app.use(express.json());
app.use(cors());

connect(process.env.MONGO_URI)
    .then(() => console.log("CONNECTION TO DATABASE [200]", createConnection(app)))
    .catch((err) => console.log("ERROR CONNECTING TO DATABASE [500] ::: ", err));

