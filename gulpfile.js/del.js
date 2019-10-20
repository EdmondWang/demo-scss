const del = require('del');

module.exports = function(cb) {
    del(['../public/css/**/*']);
    cb();
};
