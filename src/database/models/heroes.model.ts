import { Model, NUMBER, STRING } from 'sequelize';
import db from '.';
import Publisher from './publisher.model';
class Heroes extends Model{
  id! : number;
  name!: string;
  gender!: string;
}

Heroes.init({
id:{
  type : NUMBER,
  primaryKey: true,
  autoIncrement: true,
},
name: STRING,
gender : STRING,
image: STRING,
}, {
  sequelize: db,
  modelName: 'heroes',
  timestamps: false,
  underscored: true,
});

// Publisher.hasMany(Heroes,{foreignKey: 'heroesPublisher', as : 'id'});
// Heroes.belongsTo(Publisher,{foreignKey : 'id', as : 'heroesPublisher'})
export default Heroes;