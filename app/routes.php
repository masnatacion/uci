<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/', function(){

	return View::make('login');
});

Route::get('dashboard', function(){

	return View::make('treasury.dashboard');
});

Route::get('registro-pago', function(){

	return View::make('treasury.registro-pago');
});

Route::get('registro-varios', function(){

	return View::make('treasury.registro-varios');
});

Route::get('conceptos-varios', function(){

	return View::make('treasury.conceptos-varios');
});

Route::get('pagos-varios', function(){

	return View::make('treasury.pagos-varios');
});


Route::get('pago-externo', function(){

	return View::make('treasury.pago-externo');
});

Route::get('nota-de-credito', function(){

	return View::make('treasury.nota-de-credito');
});


Route::get('cancelacion-transaccion', function(){

	return View::make('treasury.cancelacion-transaccion');
});


Route::get('cartera-vencida', function(){

	return View::make('treasury.cartera-vencida');
});

Route::get('negociar-pago', function(){

	return View::make('treasury.negociar-pago');
});

Route::get('actualizar-cuenta', function(){

	return View::make('treasury.actualizar-cuenta');
});


/*
Route::get('/', function()
{
	return View::make('hello');
});
*/