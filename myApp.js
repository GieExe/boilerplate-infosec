const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet to help secure the app by setting various HTTP headers
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, Helmet is securing this app!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
