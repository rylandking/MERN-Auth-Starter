const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Init Middleware
// Allows us to get the data in req.body in users.js, etc.
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
