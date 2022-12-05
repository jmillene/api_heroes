import { Request, Response } from "express";
import HeroesService from "../services/heroes.service";
export default class HeroesController {
  service: HeroesService;
  constructor() {
    this.service = new HeroesService();
  }
  public heroes = async (req: Request, res: Response) => {
    const { body } = req;
    const { name, gender, image } = req.body;
    try {
      const getHeroes = await this.service.createHeroes(body);
      if (!name || !gender || !image)
        return res.status(400).json({ message: "Required fields" });
      return res.status(201).json(getHeroes);
    } catch (error) {
      console.log(error);
      return res.status(500).json("deu ruim");
    }
  };
  public getHeroes = async (req: Request, res: Response) => {
    try {
      const getHeroes = await this.service.getHeroes();
      return res.status(200).json(getHeroes);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Heroes not found");
    }
  };
  public getHeroesId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const getHeroesId = await this.service.getHeroesId(id);
      return res.status(200).json(getHeroesId);
    } catch (error) {
      console.log(error);
      return res.status(500).json("id not found");
    }
  };
  public updateHeroes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, gender, image } = req.body;
    const up = await this.service.updateHeroes(id, name, gender, image);
    if (!up) return res.status(400).json({ messag: "Hero cannot be upgraded" });
    return res.status(200).json({ message: "Hero updated successfully" });
  };
  public deleteHeroes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteHeroes = await this.service.deleteHeroes(id);
    if (!deleteHeroes)
      return res.status(400).json({ message: "Hero cannot be deleted" });
    return res.status(202).json({ message: "Hero deleted successfully." });
  };
}
