/*
 * node-syte.
 * http://github.com/jonschlinkert/node-syte
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

module.exports = function(grunt) {

  // See: node-config README for options
  var config = require('config');

  grunt.initConfig({

    // Use revision with templates.
    revision: config.compress.revision,

    less: {
      compile: {
        files: {
          'static/css/styles.css': ['static/less/styles.less']
        }
      },
      minify: {
        options: {
          yuicompress: true
        },
        files: {
          'static/css/styles-<%= revision %>.min.css': ['static/less/styles.less']
        }
      }
    },
    uglify: {
      main: {
        files: {
          // need to include requirejs first
          "static/js/min/scripts-<%= revision %>.min.js": [
            'static/js/libs/require.js',
            'static/js/libs/jquery.url.js',
            'static/js/libs/bootstrap-modal.js',
            'static/js/libs/prettify.js',
            'static/js/libs/text.js',
            'static/js/libs/bootstrap-transition.js',
            'static/js/libs/json.js',
            'static/js/libs/handlebars.js',
            'static/js/libs/moment.min.js',
            'static/js/libs/spin.js',
            'static/js/components/*'
          ]
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', [
    "less",
    "uglify"
  ]);
};
