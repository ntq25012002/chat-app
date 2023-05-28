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
        // $data = $this->user->
    }

}
