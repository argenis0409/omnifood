const path = require('path');

module.exports = {
 mode: 'none',
  context: path.join(__dirname, '/resources'),

  entry: {
    javascript: './js/script'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

};
