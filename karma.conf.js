// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox'],
    files: ['tests.js']
  });
};