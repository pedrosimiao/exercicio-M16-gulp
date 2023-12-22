const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')) 
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function sassComp() { 
    return gulp.src('./src/estilos/main.scss')
        .pipe(sourcemaps.init()) 
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/estilos'));
}


function JSComp() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}


function compImg() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


exports.default = function() {
    gulp.watch('./src/estilos/*.scss', {ignoreInitial: false}, gulp.series(sassComp));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(JSComp));
    gulp.watch('./src/images', {ignoreInitial: false}, gulp.series(compImg));
}