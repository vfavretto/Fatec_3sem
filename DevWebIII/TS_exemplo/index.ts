import express from 'express';
import {getUser} from './src/controllers/user.controller';
const app = express();

app.use("/", getUser);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
