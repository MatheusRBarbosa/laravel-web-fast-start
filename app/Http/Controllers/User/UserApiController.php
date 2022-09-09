<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\ValidateCodeRequest;
use App\Services\UserService;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Spatie\Fractal\Facades\Fractal;

/**
 * @group User
 */
class UserApiController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Cadastro de usuário
     * 
     * @authenticated
     * 
     * @bodyParam name string required Nome do usuário
     * @bodyParam email string required Email do usuário
     * @bodyParam password string required Senha do usuário
     * 
     * @transformer 201 App\Transformers\UserTransformer
     * @transformModel App\Models\User
     */
    public function store(StoreUserRequest $request)
    {
        $user = $this->userService->store($request);

        $transformer = new UserTransformer();
        return Fractal::item($user)
            ->transformWith($transformer)
            ->toArray();
    }

    /**
     * Envia codigo para recuperacao de senha
     * 
     * @bodyParam email email required Email do usuário. Example: meu@gmail.com
     * 
     * @response {
     * "message": "Email enviado com sucesso!"
     * }
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $response = $this->userService->sendForgotPassword($request);
        return response()->json($response, 200);
    }

    /**
     * Valida codigo do usuario para recuperar senha
     * 
     * @bodyParam email email required Email do usuário. Example: meu@gmail.com
     * @bodyParam code string required Codigo para trocar a senha. Example: 123456
     * 
     * @response {
     *  "status": true
     * }
     */
    public function validateCode(ValidateCodeRequest $request)
    {
        $user = $this->userService->getByEmail($request->email);
        $isValid = $this->userService->validateCode($request, $user);
        return response()->json($isValid, 200);
    }

    /**
     * Troca senha a partir do codigo enviado
     * 
     * @bodyParam email email required Email do usuário. Example: meu@gmail.com
     * @bodyParam code string required Codigo para trocar a senha. Example: 123456
     * @bodyParam password string required Nova senha do usuário. Example: minhaS3nh@Segura!
     * 
     * @response 200 { "token": "eyJ0eXAiOiJKV1QiLCJhbGci..." }
     */
    public function changePassword(ChangePasswordRequest $request)
    {
        $newToken = $this->userService->changePassword($request);
        return response()->json($newToken, 200);
    }
}
