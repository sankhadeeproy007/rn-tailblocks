module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'react/style-prop-object': [
      'off',
      {
        allow: ['StatusBar'],
      },
    ],
  },
};
