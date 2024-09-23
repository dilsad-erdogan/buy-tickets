const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
require('dotenv').config();

var connectDB = require('./config/mongoDB');
connectDB();

app.use(cors());
app.use(express.json());

// Basit bir rota tanımlama
app.get('/', (req, res) => {
  res.send('Hello, Node.js backend is running!');
});

app.use('/user', require('./routes/user'));
app.use('/ticket', require('./routes/ticket'));

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});