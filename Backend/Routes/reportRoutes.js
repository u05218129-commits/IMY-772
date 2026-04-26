const express = require('express');
const router = express.Router();
const {submittingReport, getAllReports} = require('../Controller/Reports');
const {verifyToken, verifyAdmin} = require('../middleware/AuthenticationMiddleware');

//FR11.1 - Submitting a report
router.post('/submit', submittingReport);

//FR11.1 - Getting the reports.
router.get('/all', verifyToken, verifyAdmin, getAllReports);
module.exports = router;
