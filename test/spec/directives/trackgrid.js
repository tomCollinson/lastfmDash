'use strict';

describe('Directive: trackGrid', function () {

  // load the directive's module
  beforeEach(module('lastfmDashApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<track-grid></track-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the trackGrid directive');
  }));
});
