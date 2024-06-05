require('es6-promise').polyfill();

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    rtlcss        = require('gulp-rtlcss'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    gutil         = require('gulp-util'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync').create(),
    reload        = browserSync.reload;

var onError = function( err ) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

// Sass
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/'))

        .pipe(rtlcss())                     // Convert to RTL
        .pipe(rename({ basename: 'rtl' }))  // Rename to rtl.css
        .pipe(gulp.dest('./dist/'));             // Output RTL stylesheets (rtl.css)
});

// JavaScript
gulp.task('js', function() {
    return gulp.src(['./js/src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('./images/src/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
        .pipe(gulp.dest('./dist/images/dist'));
});

// Watch
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        notify: false,
        open: false
    });
    gulp.watch('./sass/**/*.scss', gulp.series('sass')).on('change', reload);
    gulp.watch(['./js/*.js', '!./js/app.min.js'], gulp.series('js')).on('change', reload);
    gulp.watch('images/src/*', gulp.series('images')).on('change', reload);
});

gulp.task('default', gulp.series(gulp.parallel('sass', 'js', 'images'), 'watch'));
