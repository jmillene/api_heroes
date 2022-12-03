import { Model, NUMBER, STRING } from 'sequelize';
import db from '.';

class Alignment extends Model{
  id! : number;
  alignment! : string;
  power! : string;
  heroesId!: number;
}

Alignment.init({
id:{
  type : NUMBER,
  primaryKey: true,
  autoIncrement: true,
},
alignment: STRING,
power: STRING,
heroesId: NUMBER,

}, {
  sequelize: db,
  modelName: 'alignment',
  timestamps: false,
  underscored: true,
});


export default Alignment;