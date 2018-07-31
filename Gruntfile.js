module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                optional: ['es7.classProperties']
            },

            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js'],
                        dest: 'build/',
                        ext: '.js'
                    }
                ]
            }
        },
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel']);

};
