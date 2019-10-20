'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const AppRoot = require('../src/utils/AppRoot');

module.exports = function() {
    console.log(AppRoot);
    return gulp.src(AppRoot + '/src/scss/**/*.scss').
        pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(AppRoot + '/public/css'));
};
