import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';
import businessesListComponent from './businessesList.component';

let businessesListModule = angular.module('businessesList', [
  uiRouter,
  uiGrid,
])

.component('businessesList', businessesListComponent)

.name;

export default businessesListModule;
