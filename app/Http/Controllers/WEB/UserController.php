<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class UserController extends Controller
{
    public function index()
    {
        sleep(1);
        $usersData = User::all();
        
        $users = $usersData->map(function($user){
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
        sleep(1);
        // dd("THIS IS TESTING");
        return Inertia::render('User/CreateUser');
        // return inertia('User/ViewUsers');
    }
}
