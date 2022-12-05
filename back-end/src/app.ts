import * as express from 'express';
import  * as cors from 'cors';
import heroesRouter from './routes/index';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/heroes', heroesRouter.heroesRouter )
export default app;
