const express = require('express');
const fs = require('fs');
const https= require("https");
const app = express();
const cors = require('cors');

// Cors plocies
app.use(cors())
// Route in sperate file
app.use('/',require("./routes"));

PORT = 8081;

//const options = {
        //key: fs.readFileSync('./techkey.pem','utf8'),
        //cert: fs.readFileSync('./techkey.crt','utf8'),
//};

//var httpsServer = https.createServer(options,app);

app.listen(PORT);
//httpsServer.listen(PORT);
