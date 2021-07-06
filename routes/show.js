const router = require('express').Router();
const File = require('../models/file');


router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if(!file){
            return res.render('download', {error: 'Link has been expired.'})
        }
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            //http://localhost:3000/files/download/253fg3232-476238b872323r
        })
    } catch (error) {
        return res.render('download', {error: 'something went wrong.'})
    }
})

module.exports = router;