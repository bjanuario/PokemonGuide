import { Entity } from '@loopback/repository';
export declare class Pokemon extends Entity {
    static on(arg0: string, arg1: (obj: never) => void): void;
    id: string;
    name?: string;
    classification?: string;
    types?: string[];
    resistant?: string[];
    weaknesses?: string[];
    weight?: {
        minimum: string;
        maximum: string;
    };
    height?: {
        minimum: string;
        maximum: string;
    };
    fleeRate?: number;
    evolutionRequirements?: {
        amount: number;
        name: string;
    };
    evolutions?: [
        {
            id: number;
            name: string;
        }
    ];
    favourite?: boolean;
    maxCP?: number;
    maxHP?: number;
    attacks?: {
        fast: [
            {
                name: string;
                type: string;
                damage: number;
            }
        ];
        special: [
            {
                name: string;
                type: string;
                damage: number;
            }
        ];
    };
    [prop: string]: any;
    constructor(data?: Partial<Pokemon>);
}
export interface PokemonRelations {
}
export declare type PokemonWithRelations = Pokemon & PokemonRelations;
