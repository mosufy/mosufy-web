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
  mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/jquery.min.js');
  mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.min.js');
  mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');

  // Combine custom CSS
  mix.styles([
    'style.css'
  ], 'public/css/main.css');

  // Combine JS files
  mix.scripts([
    // 'SmoothScroll.js',
    // 'easypiechart,js',
    'jquery.prettyPhoto.js',
    // 'jquery.isotope.js',
    // 'jquery.counterup.js',
    // 'waypoints.js',
    // 'jqBootstrapValidation.js'
  ], 'public/js/packages.js');

  // Copy all assets files to public folders respectively
  mix.copy('resources/assets/css', 'public/css');
  mix.copy('resources/assets/fonts', 'public/fonts');
  mix.copy('resources/assets/img', 'public/img');
  mix.copy('resources/assets/js/main.js', 'public/js/main.js');
  mix.copy('resources/assets/favicons', 'public');
});