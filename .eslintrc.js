module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/style-prop-object': [
      'off',
      {
        allow: ['StatusBar'],
      },
    ],
  },
};
