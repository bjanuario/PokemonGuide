"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const config = {
    model: models_1.Pokemon,
    pattern: 'CrudRest',
    dataSource: 'mongodb',
    basePath: '/pokemon',
};
module.exports = config;
//# sourceMappingURL=pokemon.rest-config.js.map