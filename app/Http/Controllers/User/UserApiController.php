<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Services\UserService;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Fractal;

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
}
