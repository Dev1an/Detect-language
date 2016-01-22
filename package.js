Package.describe({
  name: 'devian:detectlanguage',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: "Utility for tap:i18n, that sets the default language to the browser's default language",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Dev1an/Detect-language.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['tap:i18n@1.0.3', 'amplify@1.0.0'], 'client')

  api.addFiles('detectlanguage.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('devian:detectlanguage');
  api.addFiles('detectlanguage-tests.js');
});
