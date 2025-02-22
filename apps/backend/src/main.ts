import express from 'express';
import routes from './routes';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
