'use strict';

describe('Service: ajaxCall', function () {

  // load the service's module
  beforeEach(module('lastfmDashApp'));

  // instantiate service
  var ajaxCall, httpBackend;
  
  beforeEach(inject(function (_AjaxCall_, $httpBackend) {
    ajaxCall = _AjaxCall_;
    httpBackend = $httpBackend;
  }));

  it('should make a call to a service', function () {
    httpBackend.whenGET('query.php').respond([{
      id: 1,
      name: "Test Data"
    }]);
    
    expect(ajaxCall.get()).toBeDefined();
  });

});
