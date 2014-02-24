/*global describe, beforeEach, it*/
'use strict';
var assert = require('chai').assert;

describe('gowebapp generator test', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');

    assert.isDefined(app, 'gowebapp generator was not required successfully');
  });
});
