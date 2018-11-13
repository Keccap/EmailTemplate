const gulp = require('gulp');
const server = require('browser-sync').create();
const config = require('../config');



gulp.task('server', cb => {
  server.init({
    server: {
      baseDir: config.dest.root,
      directory: false,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    files: [config.dest.html + '/*.html'],
    notify: false,
    open: false,
    ghostMode: false,
    online: false,
    tunnel: null
  });

  cb();
});
