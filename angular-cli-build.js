// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var Funnel = require('angular-cli/node_modules/broccoli-funnel');
var mergeTrees = require('angular-cli/node_modules/broccoli-merge-trees');

module.exports = function(defaults) {
  
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      '@angular2-material/**/*',
      'ng2-material/**/*.*', // extra library, used only for the extra CSS (for now)
      'roboto-fontface/css/roboto/**/*.+(css)',
      'roboto-fontface/fonts/**',
      'material-design-icons/iconfont/*',
      'marked/lib/*'
    ]
  });console.log(__dirname + '/src')

  var markdownTree = new Funnel(__dirname + '/src', {
    include: ['*.md'],
    destDir: './'
  });

  return mergeTrees([app, markdownTree], { overwrite: true });
};
