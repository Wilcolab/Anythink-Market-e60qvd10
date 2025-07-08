
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

// Import routes
const rootRouter = require('../routes/root');
const tasksRouter = require('../routes/tasks');

app.use('/', rootRouter);
app.use('/tasks', tasksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
