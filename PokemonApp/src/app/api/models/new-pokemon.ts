/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Pokemon, 'id'>, schemaOptions: { title: 'NewPokemon', exclude: [ 'id' ] })
 */
export interface NewPokemon {
  attacks?: {  };
  classification?: string;
  evolutionRequirements?: {  };
  evolutions?: Array<{  }>;
  fleeRate?: number;
  height?: {  };
  favourite: boolean;
  maxCP?: number;
  maxHP?: number;
  name?: string;
  resistant?: Array<string>;
  types?: Array<string>;
  weaknesses?: Array<string>;
  weight?: {  };

  [key: string]: any;
}
