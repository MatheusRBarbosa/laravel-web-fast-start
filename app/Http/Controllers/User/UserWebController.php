<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Services\UserService;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Spatie\Fractal\Facades\Fractal;

class UserWebController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * 
     */
    public function renderSignup()
    {
        return view('user.signup');
    }

    /**
     * 
     */
    public function renderForgotPassword()
    {
        return view('auth.forgotPassword');
    }

    /**
     * 
     */
    public function renderChangePassword()
    {
        return view('auth.changePassword');
    }

    /**
     * 
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $response = $this->userService->sendForgotPassword($request);
        return response()->json($response, 200);
    }

    /**
     * 
     */
    public function changePassword(ChangePasswordRequest $request)
    {
        $user = $this->userService->changePassword($request);

        $transformer = new UserTransformer();
        return Fractal::item($user)
            ->transformWith($transformer)
            ->toArray();
    }
}
