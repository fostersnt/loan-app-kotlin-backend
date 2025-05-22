<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        sleep(1);
        return Inertia::render('User/CreateUser');
    }

    public function showCreate()
    {
        sleep(1);
        return inertia('User/ViewUsers');
    }
}
