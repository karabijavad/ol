import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';
import businessListComponent from './businessList.component';

let businessListModule = angular.module('businessList', [
  uiRouter,
  uiGrid,
  'ui.grid.pagination',
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('businessList', {
      url: '/',
      component: 'businessList'
    })
})

.component('businessList', businessListComponent)

.name;

export default businessListModule;
