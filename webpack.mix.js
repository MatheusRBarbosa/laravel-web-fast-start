const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js/webpack')
    .sass('resources/sass/app.scss', 'public/css/webpack')
    .sourceMaps();

mix.scripts('resources/js/components', 'public/js/webpack/components.js');

// Minify
mix.minify([
    'public/js/webpack/app.js',
    'public/css/webpack/app.css'
]);