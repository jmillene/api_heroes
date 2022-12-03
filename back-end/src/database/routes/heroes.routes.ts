import { Router } from 'express';
import HeroesController from '../controller/heroes.controller';

const routes  = Router();
const heroesController = new HeroesController();

routes.post('/', heroesController.heroes);
routes.get('/', heroesController.getHeroes);
routes.get('/:id', heroesController.getHeroesId);
routes.patch('/:id', heroesController.updateHeroes);
routes.delete('/:id', heroesController.deleteHeroes);

export default routes;