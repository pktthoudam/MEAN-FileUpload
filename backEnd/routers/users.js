const express =  require('express');
const router = express.Router();
const userController = require("../controllers/users");
const upload = require("../middleware/upload")

router.post("/create", upload.single("avatar"),userController.create)
router.get("/getUser", userController.getData)

module.exports = router