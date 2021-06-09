"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PokemonController = class PokemonController {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }
    async create(pokemon) {
        return this.pokemonRepository.create(pokemon);
    }
    async count(where) {
        return this.pokemonRepository.count(where);
    }
    async find(filter) {
        return this.pokemonRepository.find(filter);
    }
    async updateAll(pokemon, where) {
        return this.pokemonRepository.updateAll(pokemon, where);
    }
    async findById(id, filter) {
        return this.pokemonRepository.findById(id, filter);
    }
    async updateById(id, pokemon) {
        await this.pokemonRepository.updateById(id, pokemon);
    }
    async replaceById(id, pokemon) {
        await this.pokemonRepository.replaceById(id, pokemon);
    }
    async deleteById(id) {
        await this.pokemonRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/pokemon'),
    rest_1.response(200, {
        description: 'Pokemon model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Pokemon) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pokemon, {
                    title: 'NewPokemon',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pokemon]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/pokemon/count'),
    rest_1.response(200, {
        description: 'Pokemon model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pokemon)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/pokemon'),
    rest_1.response(200, {
        description: 'Array of Pokemon model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Pokemon, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pokemon)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/pokemon'),
    rest_1.response(200, {
        description: 'Pokemon PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pokemon, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pokemon)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pokemon, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/pokemon/{id}'),
    rest_1.response(200, {
        description: 'Pokemon model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pokemon, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pokemon, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/pokemon/{id}'),
    rest_1.response(204, {
        description: 'Pokemon PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pokemon, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pokemon]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/pokemon/{id}'),
    rest_1.response(204, {
        description: 'Pokemon PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pokemon]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/pokemon/{id}'),
    rest_1.response(204, {
        description: 'Pokemon DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PokemonController.prototype, "deleteById", null);
PokemonController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PokemonRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PokemonRepository])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map