const webpack = require('webpack');
const { task } = require('gulp');
const webpack_config = require('../../webpack.config');

task('scripts', function (callback) {
    webpack({ ...webpack_config }, function (err, stats) {
        if (err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});

