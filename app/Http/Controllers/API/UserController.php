<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'msisdn' => 'required|string|max:12'
        ]);
    }

    public function edit(Request $request, $user_id)
    {
        $validator = Validator::make($request->all(), [
            'msisdn' => 'required|string|max:12'
        ]);

        $user = User::query()->find($user_id);

        if ($user) {
            $user->update([
                'msisdn' => $request->msisdn
            ]);
        } else {
            
        }
        
    }
}
