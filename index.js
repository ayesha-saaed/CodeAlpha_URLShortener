const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


const urlRoutes = require('./routes/url');
app.use('/', urlRoutes);