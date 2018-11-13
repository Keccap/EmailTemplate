const gulp = require('gulp');



gulp.task('build', cb =>{
	gulp.series(
		'clean',
		'nunjucks',
		'copy'
	)(cb);
});