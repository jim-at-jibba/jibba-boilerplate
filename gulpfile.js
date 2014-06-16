/**
 * Created by jim_at_jibba on 5/16/14.
 */
//Load plugins
var gulp = require('gulp'),
    gutil= require('gulp-util')
sass = require('gulp-ruby-sass'),
    prefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

// Where do you store your Sass files?
var sassDir = 'scss';

// Which directory should Sass compile to?
var targetCSSDir = 'dist/css';

//Styles
gulp.task('styles', function(){
    return gulp.src(sassDir + '/styles.scss')
        .pipe(sass({ style: 'extended' }).on('error', gutil.log))
        .pipe(prefixer('last 10 version'))
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify({ message: 'All done, oh great one!'}));
});

// Keep an eye on Sass files for changes...
gulp.task('watch', function () {
    gulp.watch(sassDir + '/**/*.scss', ['styles']);
});

// What tasks does running gulp trigger?
gulp.task('default', ['styles', 'watch']);


//// Images
//gulp.task('images', function() {
//    return gulp.src('src/images/**/*')
//        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//        .pipe(livereload(server))
//        .pipe(gulp.dest('dist/images'))
//        .pipe(notify({ message: 'Images task complete' }));
//});
//

