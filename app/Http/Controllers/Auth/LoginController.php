<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

/**
 * @group Auth
 */

class LoginController extends Controller
{

    /**
     * Login
     * 
     * @unauthenticated
     * 
     * @bodyParam email string required Email do usuário
     * @bodyParam password string required Senha do usuário
     * 
     * @response 200 { "token": "eyJ0eXAiOiJKV1QiLCJhbGci..." }
     */
    public function authenticate(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);

            return response()->json(compact('token'), 200);
        }

        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    /**
     * Refresh token
     * 
     * Gera um novo JWT token a partir do expirado
     * 
     * @authenticated
     * 
     * @response 200 { "refreshedToken": "eyJ0eXAiOiJKV1QiLCJhbGci..." }
     */
    public function refresh()
    {
        try {
            $token = JWTAuth::getToken()->get();
            $refreshedToken = JWTAuth::refresh($token);

            return response()->json(compact('refreshedToken'), 200);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create new token'], 500);
        }

        return response()->json(['error' => 'Invalid token'], 401);
    }

    //--------------------------//
    //        Web Methods       //
    //--------------------------//

    /**
     * @hideFromAPIDocumentation
     */
    public function renderLogin()
    {
        return view('login');
    }

    // TODO: Logout method
}
