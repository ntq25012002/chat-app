<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserMongodb as User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $user;
    public function __construct(User $user) {
        $this->user = $user;
    }

    public function listUsers() {
        $users = $this->user->getUsers('647468e2cc01f1f8ef077a56');
        echo "<pre>";
        print_r($users);
        echo "</pre>";
        die;
        // $data = $this->user->getUsers();
    }

}
