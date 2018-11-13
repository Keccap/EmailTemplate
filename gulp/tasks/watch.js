const gulp = require('gulp');


gulp.task('watch', cb =>{
	gulp.parallel(
		'nunjucks:watch',
		'copy:watch'
	)(cb);
});
