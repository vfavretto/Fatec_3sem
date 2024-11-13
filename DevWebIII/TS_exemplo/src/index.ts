import express from 'express';
import userRoutes from './routes/user';
const app = express();
import cors from 'cors';

app.use(cors({
  origin: 'http://localhost:80',
}));

app.use("/api/v1", userRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

export default app;
