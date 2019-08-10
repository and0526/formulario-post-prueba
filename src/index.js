import express from 'express';
import routes from '../routes/teacher.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/teacher', routes);

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });