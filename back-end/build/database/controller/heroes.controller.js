"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_service_1 = require("../services/heroes.service");
class HeroesController {
    constructor() {
        this.heroes = async (req, res) => {
            const { body } = req;
            const { name, gender, image } = req.body;
            try {
                const getHeroes = await this.service.createHeroes(body);
                if (!name || !gender || !image)
                    return res.status(400).json({ message: "Required fields" });
                return res.status(201).json(getHeroes);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("deu ruim");
            }
        };
        this.getHeroes = async (req, res) => {
            try {
                const getHeroes = await this.service.getHeroes();
                return res.status(200).json(getHeroes);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("Heroes not found");
            }
        };
        this.getHeroesId = async (req, res) => {
            try {
                const { id } = req.params;
                const getHeroesId = await this.service.getHeroesId(id);
                return res.status(200).json(getHeroesId);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json("id not found");
            }
        };
        this.updateHeroes = async (req, res) => {
            const { id } = req.params;
            const { name, gender, image } = req.body;
            const up = await this.service.updateHeroes(id, name, gender, image);
            if (!up)
                return res.status(400).json({ messag: "Hero cannot be upgraded" });
            return res.status(200).json({ message: "Hero updated successfully" });
        };
        this.deleteHeroes = async (req, res) => {
            const { id } = req.params;
            const deleteHeroes = await this.service.deleteHeroes(id);
            if (!deleteHeroes)
                return res.status(400).json({ message: "Hero cannot be deleted" });
            return res.status(202).json({ message: "Hero deleted successfully." });
        };
        this.service = new heroes_service_1.default();
    }
}
exports.default = HeroesController;
//# sourceMappingURL=heroes.controller.js.map