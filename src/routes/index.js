const router = require('express').Router();
const mailerController = require('../controllers/mailer.controller');

router.post('/bussiness-inquiries', mailerController.sendingBussinesInq)

module.exports = router