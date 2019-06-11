const gulp = require('gulp');
const config = require('../config');


gulp.task('copy:root', () => {
    return gulp
    .src(config.src.root + '/*.*')
    .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', () => {
    return gulp
    .src(config.src.img + '/**/*.*')
    .pipe(gulp.dest(config.dest.img));
});


gulp.task('copy:img:watch', cb => {
    gulp.watch(config.src.img + '/**/*.*', gulp.series('copy:img'));
    cb();
});

gulp.task('copy:root:watch', cb => {
    gulp.watch(config.src.root + '/*.*', gulp.series('copy:root'));
    cb();
});


gulp.task('copy', cb => {
    gulp.parallel(
        'copy:img',
        'copy:root'
    )(cb);
});


gulp.task('copy:watch', cb => {
    gulp.parallel(
        'copy:img:watch',
        'copy:root:watch'
    )(cb);
});
