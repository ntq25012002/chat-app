<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use MongoDB\Client;

class PersonalAccessTokens extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection;

    public function __construct()
    {
        $db = env('MONGODB_DATABASE', 'chat-app');
        $this->collection = (new Client)->$db->personal_access_tokens;
    }

    public function checkExistToken($token) {
        $query = DB::connection('mongodb')->table('personal_access_tokens')
                // ->join('users', 'users._id', '=', 'personal_access_tokens.tokenable_id')
                ->where('token', $token)
                ->first();
        return $query;
    }
    public function insertAccessToken($dataToken) {
        // $personalAccessToken = new PersonalAccessTokens();
        // $personalAccessToken->name = $token->name;
        // $personalAccessToken->token = $token->plainTextToken;
        // $personalAccessToken->abilities = $token->abilities;
        // $personalAccessToken->tokenable_id = $user->id;
        // $personalAccessToken->tokenable_type = get_class($user);
        // $result = $personalAccessToken->save();
    
        // $data = [
        //     'name' => $token->name,
        //     'token' => $token->plainTextToken,
        //     'abilities' => $token->abilities,
        //     'tokenable_id' => $user->id,
        //     'tokenable_type' => get_class($user)
        // ];
       
        $accessToken = DB::connection('mongodb')->table('personal_access_tokens')->insertGetId($dataToken);

        return $accessToken;
    }
}
