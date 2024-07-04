const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let tasks = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.send('Task added!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
