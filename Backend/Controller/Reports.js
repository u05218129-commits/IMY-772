const pool = require('../config/database');

//Submitting a new report to the database
const submittingReport = async (req, res) => {
  const {
    reporterName,
    email,
    organisation,
    caseDescription,
    caseTitle,
    bacteriaType,
    antibioticResistanceType,
    location,
    dateOfCase,
  } = req.body;

  try {
    if (!reporterName || !email || !caseTitle) {
      return res.status(400).json({ message: "Fill in all the required documents." });
    }
    await pool.query(
      `INSERT INTO reports 
        (reporterName, email, organisation, case_description, case_title, 
         bacteria_type, antibiotic_resistance_type, location, date_of_case, status, is_verified) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        reporterName,
        email,
        organisation,
        caseDescription,
        caseTitle,
        bacteriaType,
        antibioticResistanceType,
        location,
        dateOfCase,
        'pending',
        false
      ]
    );

    res.status(201).json({message: "Report successfully submitted!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Something went wrong, please try again." });
  }
};
//Getting the reports for admin to review.
const getAllReports = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM reports ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "The reports could not be fetched"});
  }
};

module.exports = {submittingReport, getAllReports};
