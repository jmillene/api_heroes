"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_model_1 = require("../database/models/heroes.model");
class HeroesService {
    constructor() {
        this.createHeroes = async ({ name, gender, image }) => {
            const heroes = await heroes_model_1.default.create({
                name,
                gender,
                image,
            });
            return heroes;
        };
        this.getHeroes = async () => {
            const heroes = await heroes_model_1.default.findAll();
            return heroes;
        };
        this.getHeroesId = async (id) => {
            const heroes = await heroes_model_1.default.findOne({ where: { id } });
            return heroes;
        };
        this.updateHeroes = async (id, name, gender, image) => {
            const heroes = await heroes_model_1.default.update({ name, gender, image }, { where: { id } });
            return heroes;
        };
        this.deleteHeroes = async (id) => {
            const heroes = await heroes_model_1.default.destroy({ where: { id } });
            return heroes;
        };
    }
}
exports.default = HeroesService;
//# sourceMappingURL=heroes.service.js.map