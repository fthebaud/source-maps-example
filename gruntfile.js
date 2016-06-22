module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    clean: ['dest/'],
    // useminPrepare will generate the config for concat, uglify, cssmin
    useminPrepare: {
      html: 'src/index.html', // html file to parse (html entry point)
      options: {
        dest: 'dest' // base directory for transformed files
      }
    },
    // usemin will update the path in the html file
    usemin: {
      html: ['src/index.html'] // html file to parse (html entry point)
    },
    // specific options for uglify
    uglify: {
      options: {
        compress: true, // source compression
        mangle: true, // mangle the variables and function names (reduce them to single letters)
        sourceMap: true // generates source maps in the same directory as the dest file, with the same basename but with a .map extension
          // sourceMapIncludeSources: true,
          // sourceMapIn: '<%= paths.dest.js %>.map'
      }
    }
  });

  grunt.registerTask('build', ['clean', 'useminPrepare', 'concat', 'uglify', 'usemin']);
};
