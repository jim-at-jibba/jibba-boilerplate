var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('src/scss/**', ['compass']);
	gulp.watch('src/img/**', ['images']);
	gulp.watch('src/js/**', ['scripts']);
	gulp.watch('src/htdocs/**', ['copy']);
	// Note: The browserify task handles js recompiling with watchify
});
