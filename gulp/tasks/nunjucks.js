const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const frontMatter = require('gulp-front-matter');
const config = require('../config');


function renderHtml() {
	nunjucksRender.nunjucks.configure({
		watch: false,
		trimBlocks: true,
		lstripBlocks: false
	});

	return gulp
	.src([config.src.templates + '/*.twig'])
	.pipe(plumber({
		errorHandler: config.errorHandler('Nunjucks')
	}))
	.pipe(frontMatter({
		property: 'data'
	}))
	.pipe(nunjucksRender({
		path: [config.src.templates]
	}))
	.pipe(gulp.dest(config.dest.root));
}


gulp.task('nunjucks', () => renderHtml());


gulp.task('nunjucks:watch', cb =>{
	gulp.watch([config.src.templates + '/**/*.twig'], gulp.series('nunjucks'));

	cb();
});

