<?php

namespace App\Http\Controllers\WEB;

use App\Helper\General;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class UserController extends Controller
{
    public function index()
    {
        sleep(1);
        $usersData = User::all();

        $users = $usersData->map(function ($user) {
            return [
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->name
            ];
        });
        // dd($user->only('id', 'name'));
        return Inertia::render('User/ViewUsers', ['users' => $users]);
    }

    public function showCreate()
    {
        return Inertia::render('User/CreateUser');
    }

    public function showLoginPage()
    {
        if (Auth::user()) {
            return redirect()->route('home');
        } else {
            return Inertia::render('Auth/LoginPage');
        }
    }

    public function userLogin(Request $request)
    {
        Log::info("LOGIN DATA === " . json_encode($request->all()));
        $validator = validator($request->all());
        // dd($validator);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('home');
        } else {
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
            // return General::apiResponse(false, "Error occurred", null);
        }
    }
}
