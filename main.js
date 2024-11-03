const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./userRoute');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use('/user', userRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
