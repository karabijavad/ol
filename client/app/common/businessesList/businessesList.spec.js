import businessesListModule from './businessesList'
import businessesListController from './businessesList.controller';
import businessesListComponent from './businessesList.component';
import businessesListTemplate from './businessesList.html';

describe('businessesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(businessesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new businessesListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(businessesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = businessesListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(businessesListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(businessesListController);
      });
  });
});
