<?php

namespace Cybertron;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $connection   = 'laravel';
    protected $table        = 'users';

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'first_last_name', 'second_last_name', 'username', 'email', 'password', 'status_id', 'id_job',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles(){
        return $this
                ->belongsToMany('Cybertron\Role')
                ->withTimestamps();
    }

    public function authorizeRoles($roles){
        if ($this->hasAnyRole($roles)) {
            return true;
        }
        return false;
    }

    public function hasAnyRole($roles)
    {
        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role)) {
                    return true;
                }
            }
        } else {
            if ($this->hasRole($roles)) {
                return true;
            }
        }
        return false;
    }

    public function hasRole($role){
        if ($this->roles()->where('name', $role)->first()) {
            return true;
        }
      return false;
    }

    public function usersInformation(){
        return $this
            ->hasOne('Cybertron\UserInformation');
    }

    public function usersStudies(){
        return $this
            ->hasMany('Cybertron\UsersStudies');
    }

    public function usersExperience(){
        return $this
            ->hasMany('Cybertron\UsersExperience');
    }

    public function usersRepository(){
        return $this
            ->hasMany('Cybertron\UsersRepositories');
    }

}
