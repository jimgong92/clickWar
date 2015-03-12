/**
 * Gulp
 */
var gulp = require('gulp');
var pkg = require('./package.json');

/**
 * Gulp Plugins
 */
var plugins = require('gulp-load-plugins')();
var gutil = plugins.loadUtils(['env', 'log']);

/**
 * Log whether run in production or development
 */
var production = gutil.env.production;
var type = production ? 'production' : 'development';
gutil.log('Building for ' + type);


gulp.task('default', function(){
  //TODO: Default grunt task
});

gulp.task('lint', function(){
  return gulp
    .src(pck.paths.src.js)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
});

gulp.task('serve', function(){
  plugins.nodemon({
    script: 'server.js'
  });
});