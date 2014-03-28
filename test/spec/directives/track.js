'use strict';

describe('Directive: track', function () {

  // load the directive's module
  beforeEach(module('lastfmDashApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<track></track>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the track directive');
  }));
});
