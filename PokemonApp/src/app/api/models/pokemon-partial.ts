/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Pokemon>, schemaOptions: { partial: true })
 */
export interface PokemonPartial {
  attacks?: {  };
  classification?: string;
  evolutionRequirements?: {  };
  evolutions?: Array<{  }>;
  fleeRate?: number;
  height?: {  };
  id?: string;
  favourite?: boolean;
  maxCP?: number;
  maxHP?: number;
  name?: string;
  resistant?: Array<string>;
  types?: Array<string>;
  weaknesses?: Array<string>;
  weight?: {  };

  [key: string]: any;
}
