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
        $usersData = User::query()->latest()->where('id', '<>', Auth::user()->id)->get();

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
        $data = null;

        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|string',
                'msisdn' => 'required|string'
            ]);

            if ($validator->fails()) {
                return back()->withErrors($validator->errors());
            }

            User::query()->create($request->all());

            $data = json_encode($request->all());

            Log::info("USER CREATE [$data], Message [User created successfully]");
        } catch (\Throwable $th) {
            $errorMessage = $th->getMessage();
            Log::info("USER CREATE [$data], Message [$errorMessage]");
            return back()->withErrors(['message' => 'Unable to create user']);
        }
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
        $request->validate([
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
