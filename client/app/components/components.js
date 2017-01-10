import angular from 'angular';
import BusinessList from './businessList/businessList';
import BusinessDetail from './businessDetail/businessDetail';

let componentModule = angular.module('app.components', [
  BusinessList,
  BusinessDetail,
])

.name;

export default componentModule;
