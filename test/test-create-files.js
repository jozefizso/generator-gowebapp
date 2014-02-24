/*global describe, beforeEach, it */
'use strict';

var helpers = require('yeoman-generator').test;
var _       = require('./spec_helper.js');

describe('gowebapp generator test', function () {
  it('creates expected files', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      '.jshintrc',
      'Gruntfile.js',
      ['README.md', /# temp/],
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/js/.jshintrc',
      'app/js/main.js',
      'app/css/site.less'
    ];

    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
