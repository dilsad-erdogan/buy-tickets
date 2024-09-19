const express = require('express');
const app = express();
const port = 3000;

// Basit bir rota tanımlama
app.get('/', (req, res) => {
  res.send('Hello, Node.js backend is running!');
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});