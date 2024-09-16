Package.describe({
  name: 'sakod:core',
  version: '0.0.3',
  summary: 'meteor 3 react in package bug',
  documentation: 'README.md',
  git: '',
});

Package.onUse(api => {
  api.versionsFrom(['2.8.0', '3.0.3']);

  api.use('ecmascript');

  api.use([
    'blaze-html-templates',
    'react-meteor-data',
    'react-template-helper',
  ], 'client');

  api.addFiles([
    'meteor.html',
    'meteor.js',
  ], 'client');
});
