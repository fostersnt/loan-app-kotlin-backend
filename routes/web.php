<?php

use App\Events\UserCreated;
use App\Helper\FirebaseService;
use App\Helper\General;
use App\Http\Controllers\WEB\DashboardController;
use App\Http\Controllers\WEB\UserController;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     $deviceToken = "cwUjRVbUS1K7X8pDFeGhIc:APA91bE2u0eILSbkZyZSTsiCOSHTpOCmACNjf3xvDOmfjnaQmXQeG6Juc5z4IsPIYQisMgJp9rHFCjLmE7O3DCC6YS2lkkJrsZbSS4TazZlBo0PTh2BdhW4";
//     $title = "Promotion";
//     $body = "Apply for a loan above GHS 2,000.00 and stand a chance of winning a land";
//     $obj = new FirebaseService();
//     $result = $obj->sendNotificationToToken($deviceToken, $title, $body);
//     // $result = FirebaseService::sendNotificationToToken($deviceToken, $title, $body);

//     // echo json_encode($result);

//     return view('welcome');
// });


Route::get("home", function(){
    $user = null;
    return view("websocket.home", compact('user'));
});

Route::get("user", function(){
    $user = [
        'name' => 'George Amoo Quansah',
        'age' => 23
    ];

    return base64_encode("8bbfbafb-6357-452f-8288-8f118a2e7b95:3336e9a94b004f548f3ac6e9e53cb24e");
    UserCreated::dispatch($user);
    return view("websocket.user_update", compact('user'));
});


Route::get('/', function(){
    sleep(1);
    return Inertia::render('Home');
});

Route::post('errors/error_boundary', function($request){
    Log::info("INCOMING DATA === " . json_encode($request));
    $errorMessage = $request->errorMessage;
    $errorInfo = $request->errorInfo;
    // return General::apiResponse(false, "$errorMessage $errorInfo");
    return response()->json(['name' => 'Foster']);
});

// Route::controller(DashboardController::class)->group(function(){
//     Route::get('/', 'dashboard');
// });

Route::controller(UserController::class)->prefix('users')->group(function(){
    Route::get('', 'index');
    Route::get('create', 'showCreate');
});