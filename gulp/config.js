const notify = require('gulp-notify');


const srcDir = 'src';
const buildDir = 'build';

const config = {
	src: {
		root: srcDir,
		templates: srcDir + '/templates',
		img: srcDir + '/img'
	},
	dest: {
		root: buildDir,
		html: buildDir,
		img: buildDir + '/img'
	},

	errorHandler
};


module.exports = config;


function errorHandler(title){
	return function(){
		notify.onError({
			title: title || 'Compile Error',
			message: '<%= error.message %>'
		}).apply(this, arguments);
		
		this.emit('end');
	};
};