const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {creatingUsersTable} = require('./models/Users');
const {creatingAdminTables} = require('./models/AdminModel');
const authenticationRoutes = require('./routes/authenticationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const reportRoutes = require('./routes/reportRoutes');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Creating the stabls when the server starts.
creatingUsersTable(); creatingAdminTables();

//The routes for the system.
app.use('/api/auth', authenticationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
