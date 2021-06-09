"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PokemonRepository = class PokemonRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Pokemon, dataSource);
    }
};
PokemonRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.mongodb')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource])
], PokemonRepository);
exports.PokemonRepository = PokemonRepository;
//# sourceMappingURL=pokemon.repository.js.map