import { Model, NUMBER, STRING } from 'sequelize';
import db from '.';

class Publisher extends Model{
  id! : number;
  heroesPublisher! : number;
}

Publisher.init({
id:{
  type : NUMBER,
  primaryKey: true,
  autoIncrement: true,
},
heroesPublisher: STRING,
}, {
  sequelize: db,
  modelName: 'publisher',
  timestamps: false,
  underscored: true,
});


export default Publisher;