const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const env = require('./env.json');

const app = express();

app.set('port', process.env.PORT || env.PORT);

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//Importing and init database
require('./src/config/database');

const routesRecords = require('./src/routes/records');
const routesUploads = require('./src/routes/upload');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

//Routes
app.use(routesRecords);
app.use(routesUploads);

console.log(path.join(__dirname, 'assets/video'))
app.use(express.static(path.join(__dirname, 'assets/video')));
app.use("/assets/video", express.static(__dirname + '/assets/video'));


//Server listenning
app.listen(app.get('port'), () => {
    console.log(`Server running in ${ env.HOST }:${ env.PORT}`);
});