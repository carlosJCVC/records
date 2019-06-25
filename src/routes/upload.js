const router = require('express').Router();
const Video = require('../models/Video');
const env = require('../../env.json');
/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage })
*/
router.get('/api/v1/videos', async (req, res) => {
    const videos = await Video.find();

    res.json({ status: 200, data: videos });
});

router.post('/api/v1/videos', (req, res) => {
    const { name } = req.body;
    //console.log("name", name);
    const video = new Video({ name });
    video.path = `http://${ env.HOST_PRODUCTION }:${ env.PORT}/assets/video/${video._id}.mp4`;
    
    video.save()
            .then( msj => res.json({ status: 200, video }))
            .catch( err => console.log(err));
});

router.post('/api/v1/videos/upload', (req, res) => {
    let file = req.files.video;
    let { id } = req.body;
    
    file.mv(`./assets/video/${ id }.mp4`, (err) => {
        if (err)
            return res.status(500).send(err);

        res.json({ status: 200 });
    });
});

module.exports = router;