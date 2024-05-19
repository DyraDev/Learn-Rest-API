const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

// Rute dasar
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rute lainnya
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

