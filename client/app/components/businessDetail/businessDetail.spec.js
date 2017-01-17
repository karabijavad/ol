import businessDetailModule from './businessDetail'
import businessDetailController from './businessDetail.controller'

describe('businessDetail', () => {
  let $http, $httpBackend, $stateParams, API_URL;

  beforeEach(() => {
    window.module(businessDetailModule);
  });

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    $http = $injector.get('$http');
    $stateParams = $injector.get('$stateParams');
  }));

  describe('', () => {
    it('should begin with loading message', () => {
      API_URL = "http://ownlocal.com/"
      $stateParams.id = 123;

      let ctrl = new businessDetailController($stateParams, $http, API_URL);
      expect(ctrl.loadingBusiness).to.eq(true);
    });

    it('should end without loading message', () => {
      API_URL = "http://ownlocal.com/"
      $stateParams.id = 123;

      $httpBackend.whenGET("http://ownlocal.com/123").respond("{}");
      let ctrl = new businessDetailController($stateParams, $http, API_URL);
      $httpBackend.flush();
      expect(ctrl.loadingBusiness).to.eq(false);
    });

    it('should end without loading message', () => {
      API_URL = "http://ownlocal.com/"
      $stateParams.id = 123;

      $httpBackend.whenGET("http://ownlocal.com/123").respond({"name": "foo"});
      let ctrl = new businessDetailController($stateParams, $http, API_URL);
      $httpBackend.flush();
      expect(ctrl.business.name).to.eq("foo");
    });
  });

});
