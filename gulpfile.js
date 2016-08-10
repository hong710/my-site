var gulp 	= require('gulp'),
	gutil 	= require('gulp-util'),
	concat 	= require('gulp-concat');
	compass = require('gulp-compass'),
	insert	= require('gulp-insert'); 	
	prefix 	= require('gulp-autoprefixer');

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

//concat custom js
var jsSources = ['components/scripts/*.js']
gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('custom.js'))
		.pipe(insert.prepend('$(document).ready(function(){'))
		.pipe(insert.append('});'))	
		.pipe(gulp.dest('builds/development/assets/js'))
});

//concat css vendor
gulp.task('css_vendors', function(){
	gulp.src('components/vendors/css/.css')
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

//exxecute all vendors css and js once time run
gulp.task('vendors',['js_vendors','css_vendors']);

//update sass and custom.js
gulp.task('default', function(){
	gulp.watch(jsSources,['js'],'components/sass/main.scss',['compass']);
});





