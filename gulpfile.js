var gulp = require('gulp');
var s3 = require("gulp-s3");
gulp.task('deploy', function () {
    var config = require('./aws.json');
    config.bucket = 'anniesdesigns.com';
    config.region = 'us-west-2';
    return gulp.src('./_site/**/*').pipe(s3(config));
});