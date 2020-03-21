var babel =require('gulp-babel');

gulp.task('js',function(){
    return gulp
    .src('src/**/*/.js')
    .pipe(print())
    .pipe(babel({presets:['env']}))
    .pipe(gulp.dest('build'))
})