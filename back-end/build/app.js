"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const app = express();
app.use(express.json());
app.use('/heroes', index_1.default.heroesRouter);
exports.default = app;
//# sourceMappingURL=app.js.map