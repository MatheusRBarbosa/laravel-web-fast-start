<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description'
    ];

    ///////////////////////////
    ///      Relations      ///
    ///////////////////////////

    /**
     * Return all users based on role
     */
    public function users()
    {
        return $this->hasMany(User::class, 'roleId');
    }
}
