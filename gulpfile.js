var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
    javascript: [
        'js/Main.js',
        'js/**/*.js'
    ],
    css: 'css/*.css'
}


// JavaScript
gulp.task('javascript', function () {
    return browserify(paths.javascript[0])
        .transform('babelify', {
            presets: ['es2015'],
            sourceMaps: false
        })
        .bundle()
        .on('error', function (error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(source('all.js'))
        .pipe(gulp.dest('build'));
});

// CSS
gulp.task('css', function () {
    return gulp.src(paths.css)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build'));
});


// Watches all
gulp.task('watch', function () {
    gulp.watch(paths.javascript, ['javascript']);
    gulp.watch(paths.css, ['css']);
});


// Default task
gulp.task('default', ['javascript', 'css', 'watch']);
