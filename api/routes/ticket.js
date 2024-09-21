const express = require('express');
const router = express.Router();
const { addTicket } = require('../controllers/ticket');

router.route('/add').post(addTicket);

module.exports = router;