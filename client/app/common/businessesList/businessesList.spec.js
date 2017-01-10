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
  });

  describe('Controller', () => {

  });

  describe('Template', () => {
  });

  describe('Component', () => {
  });
});
