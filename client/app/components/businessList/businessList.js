import angular from 'angular';
import uiRouter from 'angular-ui-router';
import businessListComponent from './businessList.component';

let businessListModule = angular.module('businessList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('businessList', {
      url: '/',
      component: 'businessList'
    })
})

.component('businessList', businessListComponent)

.name;

export default businessListModule;
