module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	require('time-grunt')(grunt);

	/*
	 * grunt watch -env=dev
	 * grunt watch -env=website
	 *
	 */

	var target = '';
	var option = '';

	var env = {
		dev: 'dev',
		website: 'website'
	}

    if(grunt.option('env') || grunt.option('theme')) {

    	// If grunt option is env, then set option to env, else set option to theme
    	option = grunt.option('env') ? 'env' : 'theme';

    	// Set the target
    	if (option === 'theme') {
    		target = env.theme+'/'+grunt.option(option);
    	} else {
    		target = grunt.option(option);
    	}

    }

	grunt.initConfig({
		// Project settings
        config: {
            // Configurable paths
            target: target
        },

		watch: {

			css: {
				files: ['<%= config.target %>/css/**/{,*/}*.scss'],
				tasks: ['sass','newer:autoprefixer:dist'],
				options: {
					reload: true,
					nospawn: true
				}
			},

			handlebars: {
                files: ['<%= config.target %>/css/**/{,*/}*.hbs'],
                tasks: ['handlebars'],
                options: {
                    reload: true,
					nospawn: true
                }
            }
		},

		sass: {
			options: {
				style: 'expanded',
				sourcemap: 'none',
				precision: 7,
				lineNumbers: true,
				loadPath: '<%= config.target %>/css/',
				trace: true,
				update: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.target %>/css/',
					src: ['**/{,*/}*.scss'],
					dest: '<%= config.target %>/css/',
					ext: '.css'
				}]
			}
		},

		autoprefixer: {
            dist: {
            	files: [{
	            	expand: true,
					cwd: '<%= config.target %>/css/',
					src: '**/{,*/}*.css',
					dest: '<%= config.target %>/css/'
				}]
            }
        },

        handlebars: {
            compile: {
                files: {
                    "<%= config.target %>/js/templates/compiled.js": ["<%= config.target %>/js/templates/**/{,*/}*.hbs"]
                },
                options: {
                    namespace: 'Handlebars.templates',
                    wrapped: true,
                    processName: function(filename) {
                        return filename.substring(filename.lastIndexOf('/')+1, filename.length - 4);
                    }
                }
            }
        },

        cssmin: {
        	options: {
        		report: 'gzip'
        	},
			dist: {
				files: [{
				expand: true,
					cwd: '<%= config.target %>/css/',
					src: ['**/{,*/}.css'],
					dest: '<%= config.target %>/css'
				}]
			}
		},

        uglify: {
			options: {
				compress: {
					drop_console: true
				},
				report: 'gzip'
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.target %>/js/',
					src: '**/{,*/}*.js',
					dest: '<%= config.target %>/js',
					ext: '.min.js'
				}]
			}
        }

	});

	grunt.registerTask('default');
	grunt.registerTask('build', ['handlebars', 'autoprefixer', 'cssmin', 'uglify']);

};