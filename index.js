const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./src/routes/records');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

//Routes
app.use(routes);


//Server listenning
app.listen("7500", () => {
    console.log('Server running in 127.0.0.1:7500');
});