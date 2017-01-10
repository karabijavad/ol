import angular from 'angular';
import uiRouter from 'angular-ui-router';
import businessesListComponent from './businessesList.component';

let businessesListModule = angular.module('businessesList', [
  uiRouter
])

.component('businessesList', businessesListComponent)
  
.name;

export default businessesListModule;
