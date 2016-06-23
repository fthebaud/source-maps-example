module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    // clean target directory before a new build (idempotence)
    clean: ['dest/'],
    // copy the html file that will be modified by usemin
    copy: {
      html: {
        src: 'src/index.html',
        dest: 'dest/index.html'
      }
    },
    // useminPrepare will generate the config for concat, uglify, cssmin
    useminPrepare: {
      html: 'src/index.html', // html file to parse in order to find js/css to minify
      options: {
        dest: 'dest', // base directory for transformed files
        staging: 'dest/source' // rep for concatenated sources
      }
    },
    // usemin will update the path in the html file
    usemin: {
      html: ['dest/index.html'] // html file to update
    },
    // specific options for uglify
    uglify: {
      options: {
        compress: true, // source compression
        mangle: true, // mangle the variables and function names (reduce them to single letters)
        sourceMap: true, // generates source maps in the same directory as the dest file, with the same basename but with a .map extension
        sourceMapIncludeSources: false // we do not want the source to be in the map
      }
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'usemin']);
};
