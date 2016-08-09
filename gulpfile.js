var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

var jsSources= [
	'components/scripts/nav.js',
	'components/scripts/mobile_nav.js',
	'components/scripts/animation.js',
	'components/scripts/misc.js'				
	];	

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('custom.js'))
		.pipe(gulp.dest('builds/development/js/'))
});
