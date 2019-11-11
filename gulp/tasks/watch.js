const gulp = require('gulp');


gulp.task('watch', cb =>{
	gulp.parallel(
        'data:watch',
		'nunjucks:watch',
		'copy:watch'
	)(cb);
});
