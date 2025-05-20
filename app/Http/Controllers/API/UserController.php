<?php

namespace App\Http\Controllers\API;

use App\Helper\General;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'msisdn' => 'required|string|max:12'
        ]);
    }

    public function update(Request $request, $user_id)
    {
        $validator = Validator::make($request->all(), [
            'msisdn' => 'required|string|max:12'
        ]);

        $message = "";
        $successStatus = false;

        try {
            $user = User::query()->find($user_id);

            if ($validator->fails()) {
                $message = $validator->errors()->first();
            } else {
                if ($user) {
                    $user->update([
                        'msisdn' => $request->msisdn
                    ]);
                    $message = "User updated successfully";
                    $successStatus = true;
                } else {
                    $message = "Unable to update user details";
                }
            }
        } catch (\Throwable $th) {
            Log::info("USER DETAILS UPDATE === " . $th->getMessage());
            $message = "Sorry, an error occurred";
        }
        return General::apiResponse($successStatus, $message);
    }
}
