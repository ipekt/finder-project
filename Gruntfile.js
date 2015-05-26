module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                includePaths: ['bower_components/susy/sass'],
            },
            dist: {
                files: {
                    'main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
          sass: {
            files: ['**/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
              livereload: true,
            },
          },
        },
    });

    grunt.registerTask('default', ['watch']);    
};
