import * as express from 'express';
import heroesRouter from './database/routes/index';
const app = express();
app.use(express.json());
app.use('/heroes', heroesRouter.heroesRouter )
export default app;
