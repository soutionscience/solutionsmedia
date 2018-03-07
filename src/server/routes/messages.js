let express = require('express');
let router =  express.Router();
let controller = require('../controllers/message.controller')
router.route('/')
.get(controller.get)
.post(controller.post)



module.exports = router;