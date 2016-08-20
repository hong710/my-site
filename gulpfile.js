
var gulp 	= require('gulp'),
	gutil 	= require('gulp-util'),
	concat 	= require('gulp-concat'),//concat all file in one place
	compass = require('gulp-compass'),//compass proccess
	insert	= require('gulp-insert'),//prepend and append string to file
	cleanCss= require('gulp-clean-css'),//minify css file
	gulpIf 	= require('gulp-if'),//if function for gulp
	uglify 	= require('gulp-uglify'),//minify js
	imageMin = require('gulp-imagemin'),//compress images	
	prefix 	= require('gulp-autoprefixer');//add vendor prefix

var env = process.env.NODE_ENV || 'development';
var outputDir,sassStyle ;
if (env==='development'){
	outputDir='builds/development/';
	sassStyle="expanded";
}else{
	outputDir='builds/production/';
	sassStyle="compressed";
}

gulp.task('log',function(){
	gutil.log(env);
}); 
	
//concat, compress js vendor  
gulp.task('js_vendors', function(){
	gulp.src('components/vendors/js/*.js')
		.pipe(concat('vendors.js'))
		.pipe(uglify())//compress js files
		.pipe(gulp.dest(outputDir+'assets/js'))
});

//concat, compress css vendor
gulp.task('css_vendors', function(){
	gulp.src('components/vendors/css/*.css')
		.pipe(concat('vendors.css'))
		.pipe(cleanCss({compatibility: 'ie8'}))//compress css files
		.pipe(gulp.dest(outputDir+'assets/css'))
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
//sass compass
sassSoures=['components/sass/main.scss'];
gulp.task('compass',function(){
	gulp.src(sassSoures)		
		.pipe(compass({
			style:sassStyle,
			css: outputDir+'assets/css',//css directory
			sass:'components/sass'//sass files and folders
		}))
		.on('error',gutil.log)
});

/******************************DEVELOPMENT**********************************************************/
//execute all vendors css and js one time run put all vendors in 1 files
gulp.task('vendors',['js_vendors','css_vendors']);//run multiple tsk with one command

//update sass and custom.js
gulp.task('default',['vendors','compass','js'], function(){
	gulp.watch(jsSources,['js']);   //run gulp js if jsSource change
	gulp.watch('components/sass/main.scss',['compass']);//run gulp compass if main.scss change
});
/******************************PRODUCTION**********************************************************/
if (env==='production'){

	//those task for copy files
	gulp.task('font', function() {
    gulp.src('builds/development/assets/fonts/*')
    .pipe(gulp.dest('builds/production/assets/fonts/'));
	});
	gulp.task('module', function() {
    gulp.src('builds/development/modules/*')
    .pipe(gulp.dest('builds/production/modules/'));
	});
	gulp.task('partial', function() {
    gulp.src('builds/development/partials/*')
    .pipe(gulp.dest('builds/production/partials/'));
	});
	gulp.task('php', function() {
    gulp.src('builds/development/*.php')
    .pipe(gulp.dest('builds/production/'));
	});
	gulp.task('copy',['font','module','partial','php']) ;

	//add prefix for production
	gulp.task('prefix',function(){
		gulp.src('builds/production/assets/css/*.css')
			.pipe(prefix({//add prefix
	            browsers: ['last 3 versions'],
	            cascade: false
	        }))
			.pipe(gulp.dest('builds/production/assets/css'))
	})
	//compress image for production
	gulp.task('imagemin',function(){
	    gulp.src('builds/development/assets/img/**')
	        .pipe(imageMin())
	        .pipe(gulp.dest('builds/production/assets/img'))
	});

	//ony in production mode
	gulp.task('production',['prefix','imagemin','copy']);
}



