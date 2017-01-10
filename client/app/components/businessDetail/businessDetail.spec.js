import businessDetailModule from './businessDetail'
import businessDetailController from './businessDetail.controller'

describe('businessDetail', () => {
  let $http, $httpBackend, $stateParams;

  beforeEach(() => {
    window.module(businessDetailModule);
  });

  beforeEach(inject(($injector) => {
    $http = $injector.get('$http');
    $stateParams = $injector.get('$stateParams');
  }));

  describe('', () => {
    it('page should begin with loading message', () => {
      let ctrl = new businessDetailController($stateParams, $http);
      expect(ctrl.loadingBusiness).to.eq(true);
    })
  });

});
