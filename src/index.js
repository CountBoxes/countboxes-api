import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(routes);
app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

export default app;