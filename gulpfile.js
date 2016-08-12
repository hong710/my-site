
var gulp 	= require('gulp'),
	gutil 	= require('gulp-util'),
	concat 	= require('gulp-concat');
	compass = require('gulp-compass'),
	insert	= require('gulp-insert'),
	cleanCss= require('gulp-clean-css'),
	gulpIf 	= require('gulp-if'),
	uglify 	= require('gulp-uglify'),
	imageMin = require('gulp-imagemin'),	
	prefix 	= require('gulp-autoprefixer');

var outputDir='builds/development/';

//concat js vendor 
gulp.task('js_vendors', function(){
	gulp.src('components/vendors/js/*.js')
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest(outputDir+'assets/js'))
});	

//concat custom js
var jsSources = ['components/scripts/*.js']
gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('custom.js'))
		.pipe(insert.prepend('$(document).ready(function(){\n'))
		.pipe(insert.append('\n});'))
		.pipe(gulp.dest(outputDir+'assets/js'))
});

//concat css vendor
gulp.task('css_vendors', function(){
	gulp.src('components/vendors/css/*.css')
		.pipe(concat('vendors.css'))
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(outputDir+'assets/css'))
});

//sass
sassSoures=['components/sass/main.scss'];
gulp.task('compass',function(){
	gulp.src(sassSoures)		
		.pipe(compass({
			style:'expanded',
			sass:'components/sass',
			img:outputDir+'assets/img'
		}))
		.pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.on('error',gutil.log)
		.pipe(gulp.dest(outputDir+'assets/css'))
});

/******************************DEVELOPMENT**********************************************************/
//execute all vendors css and js one time run put all vendors in 1 files
gulp.task('vendors',['js_vendors','css_vendors']);//run multiple tsk with one command

//update sass and custom.js
gulp.task('default',['compass','js'], function(){
	gulp.watch(jsSources,['js']);   //run gulp js if jsSource change
	gulp.watch('components/sass/main.scss',['compass']);//run gulp compass if main.scss change
});
/******************************PRODUCTION**********************************************************/

//clone all files run only one 
gulp.task('copyfiles', function() {
    gulp.src('builds/development/**')
    .pipe(gulp.dest('builds/production/'));
});

gulp.task('csscompressed',function(){
	gulp.src('builds/production/assets/css/*.css')
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('builds/production/assets/css'))
})

gulp.task('jscompressed',function(){
	gulp.src('builds/production/assets/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('builds/production/assets/js'))
})


gulp.task('imagemin',function(){
    gulp.src('builds/production/assets/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('builds/production/assets/img'))
});

gulp.task('production',['csscompressed','jscompressed','imagemin']);





