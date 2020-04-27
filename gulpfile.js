var gulp = require('gulp');
var mockServer = require('gulp-mock-server');

var host = "192.168.43.190";
// var host = '10.108.151.233';
var host = 'localhost';
//var host = '192.168.1.104';


gulp.task('mock', function () {
    gulp.src('.')
        .pipe(mockServer({
            port: '8888',
            host: host,
            allowCrossOrigin: true
        }));
});

gulp.task('default',['mock']);