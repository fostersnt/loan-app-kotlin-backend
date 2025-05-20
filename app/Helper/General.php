<?php

namespace App\Helper;

class General {
    public static function validateMsisdn(){

    }

    public static function apiResponse(bool $successStatus, string $message, $data = null)
    {
        return response()->json([
            'success' => $successStatus,
            'message' => $message,
            'data' => $data
        ]);
    }
}