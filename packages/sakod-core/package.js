Package.describe({
  name: 'sakod:core',
  version: '0.0.3',
  summary: 'meteor 3 react in package bug',
  documentation: 'README.md',
  git: '',
});

Npm.depends({
  '@lexical/react': '0.14.5',
});

Package.onUse(api => {
  api.versionsFrom(['2.8.0', '3.0-rc.0']);

  api.use('ecmascript');

  api.use([
    'blaze-html-templates',
    'react-meteor-data',
    'react-template-helper',
  ], 'client');

  api.addFiles([
    'sk-editor.hbs.html',
    'sk-editor.client.js',
  ], 'client');
});
