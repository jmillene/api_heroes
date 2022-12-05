"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Alignment extends sequelize_1.Model {
}
Alignment.init({
    id: {
        type: sequelize_1.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    alignment: sequelize_1.STRING,
    power: sequelize_1.STRING,
    heroesId: sequelize_1.NUMBER,
}, {
    sequelize: _1.default,
    modelName: 'alignment',
    timestamps: false,
    underscored: true,
});
exports.default = Alignment;
//# sourceMappingURL=alignment.model.js.map