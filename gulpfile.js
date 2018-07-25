var gulp                = require('gulp'),
svgSprite               = require('gulp-svg-sprite');

    var svgConfig = {
      svg: {
        namespaceClassnames: false
      },
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.svg'
        }
      }
    };


gulp.task('default', function() {
    gulp.src('**/*.svg', {cwd: 'svg-sprite'})
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('img'));
});