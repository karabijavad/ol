import angular from 'angular';
import uiRouter from 'angular-ui-router';
import businessDetailComponent from './businessDetail.component';

let businessDetailModule = angular.module('businessDetail', [
  uiRouter,
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('businessesDetail', {
      url: '/businesses/:id',
      component: 'businessDetail'
    })
})
.component('businessDetail', businessDetailComponent)
.name;

export default businessDetailModule;
