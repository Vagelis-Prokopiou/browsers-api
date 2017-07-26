// karma.conf.js
module.exports = function(config)
{
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox'],
    files: [
      'js/tdd.js',
      'test/tdd-tests.js',
      'test/browser-tests.js',
      'test/predicates.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'tests.js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
