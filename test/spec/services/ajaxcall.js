'use strict';

describe('Service: ajaxCall', function () {

  // load the service's module
  beforeEach(module('lastfmDashApp'));

  // instantiate service
  var ajaxCall;
  beforeEach(inject(function (_ajaxCall_) {
    ajaxCall = _ajaxCall_;
  }));

  it('should do something', function () {
    expect(!!ajaxCall).toBe(true);
  });

});
