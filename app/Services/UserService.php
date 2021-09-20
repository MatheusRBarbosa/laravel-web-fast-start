<?php

namespace App\Services;

use App\Http\Requests\User\StoreUserRequest;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserService
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Store user
     * 
     * @return User $user
     */
    public function store(StoreUserRequest $request)
    {
        $user = null;
        DB::transaction(function () use (&$user, $request) {
            $request->merge([
                'roleId' => Role::User
            ]);

            $user = $this->user->create($request->all());
        });

        return $user;
    }
}
