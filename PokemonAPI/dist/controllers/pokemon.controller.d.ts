import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pokemon } from '../models';
import { PokemonRepository } from '../repositories';
export declare class PokemonController {
    pokemonRepository: PokemonRepository;
    constructor(pokemonRepository: PokemonRepository);
    create(pokemon: Pokemon): Promise<Pokemon>;
    count(where?: Where<Pokemon>): Promise<Count>;
    find(filter?: Filter<Pokemon>): Promise<Pokemon[]>;
    updateAll(pokemon: Pokemon, where?: Where<Pokemon>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Pokemon>): Promise<Pokemon>;
    updateById(id: string, pokemon: Pokemon): Promise<void>;
    replaceById(id: string, pokemon: Pokemon): Promise<void>;
    deleteById(id: string): Promise<void>;
}
