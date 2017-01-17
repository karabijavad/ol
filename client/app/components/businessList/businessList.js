import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';
import NgMap from 'ngmap';

import businessListComponent from './businessList.component';

let businessListModule = angular.module('businessList', [
  uiRouter,
  uiGrid,
  NgMap,
  'ui.grid.pagination',
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('businessList', {
      url: '/?page',
      component: 'businessList'
    })
})

.component('businessList', businessListComponent)

.name;

export default businessListModule;
