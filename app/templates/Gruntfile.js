module.exports = function( grunt ) {
	'use strict';
	//
	// Grunt configuration:  
	//
	// https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	//

	var config = {
		pkg: grunt.file.readJSON('package.json')
		,banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd H:MM") %> */'
        ,copy: {

            main: {
                expand: true,
                cwd: 'src/',
                src: 'Login/CHROME_36.0.1985.143_MAC_login_success.xml',
                dest: 'app/source',
                options: {
                    process: function (content, srcpath) {
                        return content.replace(/\./g,"_");
                    }
                }
            }
        }
        ,convert: {
            options: {
                explicitArray: false
            },
            xml2json: {
                files: [
                    {
                        expand: true,
                        cwd: 'reports/',
                        src: ['**/*.xml'],
                        dest: 'app/result/',
                        ext: '.json'
                    }
                ]
            }
        },
        "merge-json": {
            "result": {
                src: [ "app/result/**/*.json" ],
                dest: "app/result/result.json"
            }
        },
        merge_data: {
            your_target: {
                src: ['app/result/**/*.{json,y{,a}ml}'],
                dest: 'app/result/all.json'
            }
        }
        ,connect: {
            options: {
                base: 'app',
                keepalive: true
            },
            server: {
                options: {
                    hostname: 'localhost'
                    ,port: 8000
                    ,base: 'app'
                    ,open: 'http://localhost:8000'
                }
            }
        }

	};

	grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-convert');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-merge-data');


    grunt.registerTask('default', ['copy:main', 'convert:xml2json', 'merge_data:your_target']);
    grunt.registerTask('read', ['convert:xml2json', 'connect:server']);

};
