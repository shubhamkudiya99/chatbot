const express = require('express');
const bodyParser = require('body-parser');
const {router} = require('./routes');
const db = require('./config/db.js')
const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use("", router);

app.listen(port, () =>{
    console.log(`Server listen on the port ${port}`);
})