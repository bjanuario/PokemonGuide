import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Pokemon, PokemonRelations } from '../models';
export declare class PokemonRepository extends DefaultCrudRepository<Pokemon, typeof Pokemon.prototype.id, PokemonRelations> {
    constructor(dataSource: MongodbDataSource);
}
