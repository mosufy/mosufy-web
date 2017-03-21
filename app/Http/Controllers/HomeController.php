<?php
/**
 * Class HomeController
 *
 * @date      11/3/2017
 * @author    Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

namespace App\Http\Controllers;

/**
 * Class HomeController
 */
class HomeController extends Controller
{
    public function index()
    {
        try {
            // Get the correct hashed bundle JS file
            $jsonBundle = json_decode(file_get_contents(base_path('public/js/bundle/' . app()->environment() . '/webpack.manifest.json')), true);
            $bundleJS   = app()->environment() . '/' . $jsonBundle['bundle']['js'];

            $jsonDll = json_decode(file_get_contents(base_path('public/js/dll/webpack.dll.manifest.json')), true);
            $dllJS   = $jsonDll['vendor']['js'];
        } catch (\Exception $e) {
            $bundleJS = 'bundle.js';
            $dllJS    = 'dll.vendor.js';
        }

        return view('index', [
            'bundleJS' => $bundleJS,
            'dllJS'    => $dllJS
        ]);
    }
}