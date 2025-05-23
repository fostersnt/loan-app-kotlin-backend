<?php

use App\Helper\General;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(UserController::class)->prefix('users')->group(function(){
    Route::post('update/{id}', 'update');
});

Route::post('errors/error_boundary', function($request){
    Log::info("INCOMING DATA === " . json_encode($request));
    $errorMessage = $request->errorMessage;
    $errorInfo = $request->errorInfo;
    return response()->json(['name' => 'Foster']);
    // return General::apiResponse(false, "$errorMessage $errorInfo");
});