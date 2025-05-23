<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
         // Check if the request expects an Inertia response
        if ($request->expectsJson()) {
            Log::channel('exceptions')->info("MESSAGE === " . $e->getMessage());
            return parent::render($request, $e);
        }

        // Handle 404 or other errors and display a custom React error page
        if ($e instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
            return Inertia::render('ErrorPage', [
                'statusCode' => 404,
                'message' => 'Page not found.',
            ]);
        }

        if ($e instanceof \Illuminate\Database\QueryException) {
            return Inertia::render('ErrorPage', [
                'statusCode' => 500,
                'message' => 'Database error.',
            ]);
        }

        // You can customize more error handling here
        return Inertia::render('ErrorPage', [
                'statusCode' => 1000,
                'message' => $e->getMessage(),
            ]);
    }
}
