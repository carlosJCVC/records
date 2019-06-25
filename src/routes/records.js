const router = require('express').Router();
const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

router.get('/api/v1/records', (req, res) => {
    //const { recordID, provider, customer, serviceType, serviceOutput, description, date, servicePrice, image } = req.body;

    res.json({ status: 200, files: "exist" });
});

router.post('/api/v1/records', (req, res) => {
    //const { recordID, provider, customer, serviceType, serviceOutput, description, date, servicePrice, image } = req.body;

    console.log(req.body);
    res.json({ status: 200 });
});

router.post('/api/v1/records/upload', (req, res) => {
    var form = new IncomingForm();
    let readStream;
    console.log("file", req.body);

    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
        console.log("file", file.name);
        console.log("field", field);
        console.log("field", file);
        //readStream = fs.createReadStream(file.path);
    });

    form.on('end', () => {
        res.json()
    })
    console.log('subiendo imagen')
    form.parse(req);
});

module.exports = router;