const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

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

