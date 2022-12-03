"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3005;
const server = app_1.default.listen(PORT, () => console.log(`Ativo na porta: ${PORT}`));
exports.default = server;
//# sourceMappingURL=server.js.map