const gulp = require('gulp');



gulp.task('build', cb =>{
	gulp.series(
		'clean',
        'data',
		'nunjucks',
		'copy'
	)(cb);
});
