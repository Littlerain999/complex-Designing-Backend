module.exports = {
    createConnection: function (SERVER) {
        SERVER.listen(process.env.PORT, () => console.log(`SERVER LISTENING AT PORT : ${process.env.PORT} [200]`));
        return "";
    }
}