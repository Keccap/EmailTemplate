const gulp = require('gulp');


gulp.task('default', cb =>{
	gulp.series(
		'build',
		'watch',
		'server'
	)(cb);
});
