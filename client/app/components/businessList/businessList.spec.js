import businessListModule from './businessList'

describe('businessList', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(businessListModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
  });

  describe('Controller', () => {
  });

  describe('View', () => {
  });
});
