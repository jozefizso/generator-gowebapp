'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GowebappGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
      console.log(this.yeoman);
      console.log(chalk.magenta('Out of the box I include HTML5 Boilerplate, jQuery, and a Gruntfile.js to build your app.'));
    }

    var prompts = [];
    // {
    //   type: 'checkbox',
    //   name: 'features',
    //   message: 'What more would you like?',
    //   choices: [{
    //     name: 'Bootstrap',
    //     value: 'includeBootstrap',
    //     checked: true
    //   }, {
    //     name: 'Modernizr',
    //     value: 'includeModernizr',
    //     checked: true
    //   }]
    // }];

    this.prompt(prompts, function (answers) {
      // var features = answers.features;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/js');
    this.mkdir('app/css');
    this.mkdir('app/img');
  },

  readme: function () {
    this.template('_README.md', 'README.md');
  },

  gruntfile: function () {
    this.template('Gruntfile.js');
  },

  packageJSON: function () {
    this.template('_package.json', 'package.json');
  },

  git: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  },

  bower: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
  },

  jshint: function () {
    this.copy('jshintrc', '.jshintrc');
    this.copy('app/jshintrc', 'app/js/.jshintrc');
  },

  editorConfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  h5bp: function () {
    this.copy('app/favicon.ico', 'app/favicon.ico');
    this.copy('app/404.html', 'app/404.html');
    this.copy('app/index.html', 'app/index.html');
    this.copy('app/robots.txt', 'app/robots.txt');
    this.copy('app/htaccess', 'app/.htaccess');
  },

  mainStylesheet: function () {
    this.copy('app/site.less', 'app/css/site.less');
  },

  mainJavaScript: function () {
    this.copy('app/main.js', 'app/js/main.js');
  },
});

module.exports = GowebappGenerator;
