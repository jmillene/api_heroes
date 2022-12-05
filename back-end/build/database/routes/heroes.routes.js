"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroes_controller_1 = require("../controller/heroes.controller");
const routes = (0, express_1.Router)();
const heroesController = new heroes_controller_1.default();
routes.post('/', heroesController.heroes);
routes.get('/', heroesController.getHeroes);
routes.get('/:id', heroesController.getHeroesId);
routes.patch('/:id', heroesController.updateHeroes);
routes.delete('/:id', heroesController.deleteHeroes);
exports.default = routes;
//# sourceMappingURL=heroes.routes.js.map