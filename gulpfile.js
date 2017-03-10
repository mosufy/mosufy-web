var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  // Copying Bootstrap and JQuery
  mix.copy('node_modules/jquery/dist/jquery.min.js', 'resources/assets/js/jquery.min.js');
  mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'resources/assets/js/bootstrap.min.js');
  mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'resources/assets/css/bootstrap.min.css');

  // Combine custom CSS
  mix.styles([
    'style.css'
  ], 'public/css/main.css');

  // Copy all JS/CSS files to public js/css folders respectively
  mix.copy('resources/assets/js', 'public/js');
  mix.copy('resources/assets/css', 'public/css');
});