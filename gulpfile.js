/**
 * Gulp
 */
var gulp = require('gulp');
var path = {
  HTML: 'src/index.html',
  OUT: 'bundle.js',  
  MINIFIED_OUT: 'bundle.min.js',
  DEST: 'dist',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST_CSS: 'dist/css',
  ENTRY_POINT: 'src/js/app.js'
};

/**
 * Gulp Plugins
 */
var plugins = require('gulp-load-plugins')();
var gutil = plugins.loadUtils(['env', 'log']);

/**
 * Build Tools
 */
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

/**
 * Log whether run in production or development
 */
var production = gutil.env.production;
var type = production ? 'production' : 'development';
gutil.log('Building for ' + type);

/**
 * Development tasks
 */
gulp.task('default', ['devBundle', 'watch', 'startDB', 'serve']);

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});
gulp.task('devBundle', function(){
 gulp.src(path.HTML)
   .pipe(plugins.htmlReplace({
     'js': 'src/' + path.OUT
   }))
   .pipe(gulp.dest(path.DEST));
});
gulp.task('watch', function(){
  gulp.watch(path.HTML, ['copy']);
  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function(){
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));

});

/**
 * Starts Node server for dev environment
 */
gulp.task('serve', function(){
  plugins.nodemon({
    script: 'server.js'
  });
});

/**
 * Starts MongoDB for dev environment
 */
gulp.task('startDB', function(){
  return gulp
    .src('')
    .pipe(plugins.shell(['mongod']));
});