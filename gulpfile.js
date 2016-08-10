var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');
	compass = require('gulp-compass'),
	prefix = require('gulp-autoprefixer');

var jsVendors= [
	'components/vendors/js/jquery.waypoints.min.js',
	'components/vendors/js/parsley.js'				
	];
//concat js vendor 
gulp.task('js_vendors', function(){
	gulp.src(jsVendors)
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('builds/development/assets/js'))
});	

var jsSources= [
	'components/scripts/nav.js',
	'components/scripts/mobile_nav.js',
	'components/scripts/animation.js',
	'components/scripts/misc.js'				
	];
//concat custom js
gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('custom.js'))
		.pipe(gulp.dest('builds/development/assets/js'))
});

//concat css vendor
var cssVendor = [
	'components/vendors/css/bootstrap.min.css',
	'components/vendors/css/animate.css',
	'components/vendors/css/font-awesome.min.css'
	];
gulp.task('css_vendors', function(){
	gulp.src(cssVendor)
		.pipe(concat('vendors.css'))
		.pipe(gulp.dest('builds/development/assets/css'))
});

//sass
gulp.task('compass',function(){
	gulp.src('components/sass/main.scss')
		.pipe(compass({
			sass:'components/sass',
			img:'builds/development/assets/img',
			style:'expanded'
		}))
		.on('error',gutil.log)
		.pipe(gulp.dest('builds/development/assets/css'))
});

//auto prefix
gulp.task('prefix', function () {
    gulp.src('builds/development/assets/css/main.css')
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('builds/development/assets'));
});



