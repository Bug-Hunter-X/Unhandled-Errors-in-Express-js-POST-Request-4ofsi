const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    if (!req.body || !req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const user = req.body;
    console.log('User:', user);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));