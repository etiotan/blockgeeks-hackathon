var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	compass = require('gulp-compass'),
	cleanCSS = require('gulp-clean-css'),
	watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


// gulp.task('build', function () { console.log('Updated materialize.css file!\n'); });

/*
gulp.task('styles', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('css/materialize.css', function () {	
    	gulp.src('css/materialize.css')
        .pipe(postcss([ require('postcss-selector-prefix')('#prefix') ]))
        .pipe(gulp.dest('../assets'));
        gulp.start('build', done);
	});
});
*/


gulp.task('watch', function () {
    return gulp.src('./css/materialize.css')
        .pipe(watch('./css/materialize.css'))
	    .pipe(postcss([ require('postcss-selector-prefix')('#material-prefix') ]))
		.pipe(cleanCSS({compatibility: 'ie8'}))	//    .pipe(minifyCSS())
        .pipe(gulp.dest('../css'));
});

gulp.task('watch-html', function () {
    return gulp.src('./*.html')
        .pipe(watch('./*.html'))
        .pipe(gulp.dest('../'));
});


gulp.task('compass', function() {
  gulp.src('./scss/*.scss')
    return gulp.src(['sass/*.scss', 'sass/**/*.scss'])
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass',
      task: 'watch'
    }))
//    .pipe(postcss([ require('postcss-selector-prefix')('#prefix2') ]))
//	.pipe(cleanCSS({compatibility: 'ie8'}))	//    .pipe(minifyCSS())
//    .pipe(gulp.dest('../assets'));
});

gulp.task('isolate', function () {
    return gulp.src('./css/materialize.css')
      .pipe(watch('./css/materialize.css'))
//	    .pipe(postcss([ require('postcss-selector-prefix')('#material-prefix') ]))
		.pipe(cleanCSS({compatibility: 'ie8'}))	//    .pipe(minifyCSS())
//        .pipe(gulp.dest('../css'));
});


gulp.task('compass-compile', function() {
  gulp.src('./scss/*.scss')
    return gulp.src(['sass/*.scss', 'sass/**/*.scss'])
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
});

// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


 gulp.task('default', ['watch','watch-html','compass']);

 gulp.task('update', ['compass-compile','isolate']);
