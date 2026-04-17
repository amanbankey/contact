const express = require('express')
const {sendContactMail} = require('../controllers/contactController')
const router = express.Router();


router.post('/send-mail', sendContactMail )


module.exports = router;