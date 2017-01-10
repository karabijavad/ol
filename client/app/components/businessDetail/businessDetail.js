import angular from 'angular';
import businessDetailComponent from './businessDetail.component';

let businessDetailModule = angular.module('businessDetail', [])
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
