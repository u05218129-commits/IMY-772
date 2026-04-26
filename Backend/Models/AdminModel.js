const pool = require('../config/database');

//Creating the tables required for the admin tables.
async function creatingAdminTables() {
  try {
    //Datasets for storing the data submitted on the dashboard
    await pool.query(`
      CREATE TABLE IF NOT EXISTS datasets (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        source VARCHAR(255),
        is_external BOOLEAN DEFAULT false,
        is_verified BOOLEAN DEFAULT true,
        uploaded_by INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    //Reports to store all the reports that are submitted.
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reports (
        id SERIAL PRIMARY KEY,
        reporter_name VARCHAR(255),
        email VARCHAR(255),
        organisation VARCHAR(255),
        case_description TEXT,
        case_title VARCHAR(255),
        bacteria_type VARCHAR(255),
        antibiotic_resistance_type VARCHAR(255),
        location VARCHAR(255),
        date_of_case DATE,
        status VARCHAR(20) DEFAULT 'pending',
        is_verified BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    //Logs keeping tract of what happens in the system
    await pool.query(`
      CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        type VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('The Admin tables is created');
  } catch (error) {
    console.error('Error creating the admin table', error);
  }
}
module.exports = {creatingAdminTables };
