const express =  require("express");

const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async () => {

    //create express object
    const app = express();
    const PORT = 3000;
    app.listen(3000, () => {
        console.log(`server started at ${PORT}`);
    } )
}

setupAndStartServer();