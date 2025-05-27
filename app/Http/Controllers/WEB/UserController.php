<?php

namespace App\Http\Controllers\WEB;

use App\Helper\General;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class UserController extends Controller
{
    public function Index()
    {
        $usersData = User::query()->where('id', '<>', Auth::user()->id)->get();

        $users = $usersData->map(function ($user) {
            return [
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'msisdn' => $user->msisdn
            ];
        });
        // dd($user->only('id', 'name'));
        return Inertia::render('User/ViewUsers', ['users' => $users]);
    }

    public function dashboard()
    {
        if (Auth::user()) {
            return Inertia::render('Home');
        } else {
            return Inertia::render('Auth/LoginPage');
        }
    }

    public function Create(Request $request)
    {
        try {
            $dd = 1 .
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|string',
                'msisdn' => 'required|string'
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            User::query()->create($request->all());
            // session()->flash("success", "successful");
            return redirect()->route('users.index')->with('success_message', 'User created successfully');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' => 'Unable to create user']);
        }

        Log::info("USER DATA === " . json_encode($request->all()));
    }

    public function showLoginPage()
    {
        if (Auth::user()) {
            return to_route('dashboard');
        } else {
            return Inertia::render('Auth/LoginPage');
        }
    }

    public function userLogin(Request $request)
    {
        Log::info("LOGIN DATA === " . json_encode($request->all()));
        $request->validator([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);
        // dd($validator);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return to_route('dashboard');
        } else {
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
            // return General::apiResponse(false, "Error occurred", null);
        }
    }

    public function userLogout()
    {
        if (Auth::user()) {
            Auth::logout();
            return redirect()->route('show.login.page');
        } else {
            return redirect()->back();
        }
    }
}
