<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        sleep(1);
        $user = User::query()->first();
        dd($user->only('id', 'name'));
        return Inertia::render('User/ViewUsers', ['userData' => 'Foster Asante']);
    }

    public function showCreate()
    {
        sleep(1);
        // dd("THIS IS TESTING");
        return Inertia::render('User/CreateUser');
        // return inertia('User/ViewUsers');
    }
}
