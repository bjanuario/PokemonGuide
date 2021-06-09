import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Pokemon} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Pokemon,
  pattern: 'CrudRest',
  dataSource: 'mongodb',
  basePath: '/pokemon',
};
module.exports = config;
