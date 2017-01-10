import angular from 'angular';
import businessesList from './businessesList/businessesList';

let commonModule = angular.module('app.common', [
  businessesList,
])

.name;

export default commonModule;
