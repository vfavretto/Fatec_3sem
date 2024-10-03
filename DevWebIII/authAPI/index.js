const express = require('express');
const authRoute = require('./src/routes/auth.route');

const app = express();
app.use(express.json());
app.use(authRoute);

app.listen(3000, () => console.log('listening on port 3000'))