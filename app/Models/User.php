<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'roleId'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * 
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * 
     */
    public function getJWTCustomClaims()
    {
        return [
            'id'        => $this->id,
            'name'      => $this->name,
            'email'     => $this->email
        ];
    }

    /**
     * 
     */
    public function isSadmin()
    {
        return $this->roleId == Role::SuperAdmin;
    }

    /**
     * 
     */
    public function isAdmin()
    {
        return $this->roleId == Role::Admin || $this->roleId == Role::SuperAdmin;
    }


    /**
     * Hash the password.
     *
     * @param string $value
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    ///////////////////////////
    ///      Relations      ///
    ///////////////////////////

    /**
     * User role
     */
    public function role()
    {
        return $this->belongsTo(Role::class, 'roleId');
    }
}
