const express = require('express');
const router = express.Router();
const { submitReport, getAllReports } = require('../Controller/Reports');
const { verifyToken, verifyAdmin } = require('../middleware/AuthenticationMiddleware');

//FR11.1 - Submitting a report
router.post('/submit', submitReport);

//FR11.1 - Getting the reports.
router.get('/all', verifyToken, verifyAdmin, getAllReports);
module.exports = router;