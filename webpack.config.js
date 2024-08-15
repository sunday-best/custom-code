const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point relative to the SundayBest folder
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output folder
    },
    mode: 'production', // Set to 'development' for debugging
};