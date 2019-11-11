const gulp = require('gulp');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const frontMatter = require('gulp-front-matter');
const fs = require('fs');
const config = require('../config');


function renderHtml() {
	nunjucksRender.nunjucks.configure({
		watch: false,
        autoescape: false,
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
    .on('data', file => {
        // слияние данных frontMatter и json файла
        const frontMatterData = file.data;
        const JSONdata = JSON.parse(fs.readFileSync(config.src.data + '/' + config.src.dataFile));
        const resultData = {};

        Object.assign(resultData, JSONdata, frontMatterData); // frontMatterData перезаписывает схожие поля из JSONdata
        // добавляем переменныу окружения
        resultData.NODE_ENV = config.env;
        resultData.IS_SERVER = config.isServer;

        file.data = resultData;
    })
	.pipe(nunjucksRender({
		path: [config.src.templates],
        envOptions: {
            autoescape: false
        }
	}))
	.pipe(gulp.dest(config.dest.root));
}


gulp.task('nunjucks', () => renderHtml());


gulp.task('nunjucks:watch', cb =>{
	gulp.watch([
	    config.src.templates + '/**/*.twig',
        config.src.data
    ], gulp.series('nunjucks'));

	cb();
});

