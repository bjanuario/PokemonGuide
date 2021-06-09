import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Pokemon extends Entity {
  static on(arg0: string, arg1: (obj: never) => void) {
      throw new Error('Method not implemented.');
  }
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  classification?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  types?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  resistant?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  weaknesses?: string[];

  @property({
    type: 'object',
  })
  weight?: {
    minimum: string,
    maximum: string
  };

  @property({
    type: 'object',
  })
  height?: {
    minimum: string,
    maximum: string
  };

  @property({
    type: 'number',
  })
  fleeRate?: number;

  @property({
    type: 'object',
  })
  evolutionRequirements?: {
    amount: number,
    name: string
  };

  @property({
    type: 'array',
    itemType: 'object',
  })
  evolutions?: [{
    id: number,
    name: string
  }];

  @property({
    type: 'boolean',
  })
  favourite?: boolean;

  @property({
    type: 'number',
  })
  maxCP?: number;

  @property({
    type: 'number',
  })
  maxHP?: number;

  @property({
    type: 'object',
  })
  attacks?: {
    fast: [
      {
        name: string,
        type: string,
        damage: number
      }
    ],
    special: [
      {
        name: string,
        type: string,
        damage: number
      }
    ]
  };

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pokemon>) {
    super(data);
  }
}

export interface PokemonRelations {
  // describe navigational properties here
}

export type PokemonWithRelations = Pokemon & PokemonRelations;
