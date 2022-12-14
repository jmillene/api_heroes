"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Publisher extends sequelize_1.Model {
}
Publisher.init({
    id: {
        type: sequelize_1.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },
    heroesPublisher: sequelize_1.STRING,
}, {
    sequelize: _1.default,
    modelName: 'publisher',
    timestamps: false,
    underscored: true,
});
exports.default = Publisher;
//# sourceMappingURL=publisher.model.js.map