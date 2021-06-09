"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
let PokemonService = class PokemonService {
    constructor( /* Add @inject to inject parameters */) { }
    /*
     * Add service methods here
     */
    insertData() {
    }
};
PokemonService = tslib_1.__decorate([
    core_1.injectable({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__metadata("design:paramtypes", [])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map