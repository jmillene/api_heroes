"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Heroes extends sequelize_1.Model {
}
Heroes.init({
    id: {
        type: sequelize_1.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize_1.STRING,
    gender: sequelize_1.STRING,
    image: sequelize_1.STRING,
}, {
    sequelize: _1.default,
    modelName: 'heroes',
    timestamps: false,
    underscored: true,
});
// Publisher.hasMany(Heroes,{foreignKey: 'heroesPublisher', as : 'id'});
// Heroes.belongsTo(Publisher,{foreignKey : 'id', as : 'heroesPublisher'})
exports.default = Heroes;
//# sourceMappingURL=heroes.model.js.map