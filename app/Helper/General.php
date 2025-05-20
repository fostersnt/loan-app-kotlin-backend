<?php

namespace App\Helper;

class General {
    public static function validateMsisdn(){

    }

    public static function apiResponse(bool $messageType, string $message, $data)
    {
        return response()->json([
            'success' => $messageType,
            'message' => $message,
            'data' => $data
        ]);
    }
}