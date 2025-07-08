const express = require('express');
const router = express.Router();

// In-memory tasks array
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET /tasks
router.get('/', (req, res) => {
  res.json({ tasks });
});

// POST /tasks
router.post('/', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ message: 'Task text is required' });
  }
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

module.exports = router;
