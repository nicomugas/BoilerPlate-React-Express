const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors()); 

const port = process.env.PORT || 3001;

server.get('/', (req, res) => {
    res.send("Amigo, funciona")
});

server.listen(port, () => {
    console.log(`Server on : ${port}`)
});