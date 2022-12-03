import { where } from 'sequelize';
import IHeroes from '../interfaces/IHeroes';

import Heroes from '../models/heroes.model';

export default class HeroesService {
public createHeroes = async ({name, gender, image} : IHeroes) =>{
  const heroes = await Heroes.create({
   name,
   gender,
   image,
  })
  return heroes;
}
public getHeroes = async() =>{
  const heroes = await Heroes.findAll();
  return heroes;
}

public getHeroesId = async (id : string) =>{
  const heroes = await Heroes.findOne({ where: { id } })
  return heroes;
}
public updateHeroes = async (id: string,name: string, gender: string, image: string) => {
const heroes = await Heroes.update({name, gender, image}, { where: { id } })
return heroes;
}
public deleteHeroes = async (id : string) => {
  const heroes = await Heroes.destroy({ where: { id } })
  return heroes;
  }
}

