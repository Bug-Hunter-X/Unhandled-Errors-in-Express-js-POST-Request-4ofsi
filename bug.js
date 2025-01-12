const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing crucial error handling here
  console.log('User:', user);
  res.send('User created');
});
app.listen(3000, () => console.log('Server started on port 3000'));