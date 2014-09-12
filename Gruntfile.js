module.exports = function(grunt) {

  // Load configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assests/less'],
          compress: true,
        },
        files: {
          'assets/css/styles.css': 'assets/less/styles.less'
        }
      } // development
    },
    watch: {
      files: ['assets/**/*.less'],
      tasks: ['less']
    }
  });

  // Load plugin(s)
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default',['watch']);
};
