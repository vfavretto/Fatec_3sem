const express = require('express');
const userRoutes = require('./routes/user');
const app = express();

app.use("/", userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
