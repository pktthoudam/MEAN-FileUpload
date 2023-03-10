const path = require("path");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true)
        } else {
            console.log("only jpg/png");
        }
    },
    limits: {
        fileSize: 2024 * 2024 * 2
    }
})

module.exports = upload