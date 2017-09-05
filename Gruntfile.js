module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: '\n\n;\n\n'
            },
            dist: {
                src: ['meerkat/www/static/www/js/**'],
                dest: './meerkat/www/static/www/dist/common.js'
            }
        },

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "./meerkat/www/static/www/dist/everything.css": "./meerkat/www/static/www/less/everything.less"
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'bower_components/bootstrap/dist/js/bootstrap.min.js',
                            'bower_components/moment/min/moment.min.js',
                            'bower_components/bootstrap/dist/fonts/**',
                            'bower_components/bootstrap-daterangepicker/daterangepicker.js',
                            'bower_components/jquery/dist/jquery.min.js',
                            'bower_components/jquery/dist/jquery.min.map',
                            'bower_components/jquery-ui/jquery-ui.min.js',
                            'bower_components/jquery-pjax/jquery.pjax.js',
                            'bower_components/jscroll/jquery.jscroll.min.js',
                            'bower_components/jquery-scrollto/src/documents/lib/jquery-scrollto.js',
                            'bower_components/font-awesome/fonts/**',
                            'bower_components/html5shiv/dist/html5shiv.min.js',
                            'bower_components/respond/dest/respond.min.js',
                            'bower_components/tablesorter/jquery.tablesorter.min.js',
                            'bower_components/jquery-number/jquery.number.min.js',
                            'bower_components/jquery-number/jquery.number.min.js.map',
                            'node_modules/plotly.js/dist/plotly-basic.min.js',
                            'node_modules/d3/build/d3.min.js',
                            'meerkat/www/static/www/images/**',
                            'meerkat/www/static/www/ico/**',
                            'meerkat/www/static/www/css/**',
                            'meerkat/www/static/www/fonts/**'
                        ],
                        dest: './meerkat/www/static/www/dist/',
                        filter: 'isFile',
                        flatten: true
                    }
                ]
            }
        },

        clean: ['./meerkat/www/static/www/dist'],

        watch: {
            concat: {
                files: [
                    './meerkat/www/static/www/js/**'
                ],
                tasks: ['concat'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: [
                    // all the watched files...
                    './meerkat/www/static/www/less/*.less'
                ],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            copy: {
                files: [
                    // everything except less and js...
                    './meerkat/www/static/www/images/**',
                    './meerkat/www/static/www/ico/**'
                ],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definition
    grunt.registerTask('build', ['concat', 'copy', 'less']);
    grunt.registerTask('default', ['build', 'watch']);
};
