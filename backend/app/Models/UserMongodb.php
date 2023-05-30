<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;
use MongoDB\Client;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
class UserMongodb extends Authenticatable
{
    use HasFactory;
    use HasApiTokens, HasFactory, Notifiable;

    // protected $collection = 'users'; // Tên collection trong MongoDB
    protected $fillable = ['name', 'email', 'password', 'phone']; 
    // protected $host;
    // protected $port;
    // protected $database;
    // protected $username;
    // protected $password;
    // protected $collection;
    
    // public function __construct() {
    //     $db = env('MONGODB_DATABASE','chat-app');
       
    //     $this->host = env('MONGODB_HOST');
    //     $this->port = env('MONGODB_PORT');
    //     $this->database = $db;
    //     $this->username = env('MONGODB_USERNAME');
    //     $this->password = env('MONGODB_PASSWORD');
    //     // $uri = "mongodb://{$this->username}:{$this->password}@{$this->host}:{port}";
    //     $uri = "mongodb://localhost:27017";
    //     $client = new Client($uri);
    //     $this->collection = $client->$db->users;
       
    //     // $client = new Client("mongodb://localhost:27017");
    //     // $database = $client->$db; // Đảm bảo tên cơ sở dữ liệu đúng
    //     // $this->collection = $database->users;
    // }
    protected $collection;

    public function __construct()
    {
        $db = env('MONGODB_DATABASE', 'chat-app');
        $this->collection = (new Client)->$db->users;
    }
    
    public function saveUser($data) {
        $lastestUser = $this->getUserLastest();
        $id = !empty($lastestUser) ? $lastestUser[0]['id'] + 1 : 1;
        $data['id'] = $id;
        $data['status'] = 0;
        // $result = $this->collection->insertOne($data);
        // // $insertedCount = $result->getInsertedCount();
       
        $userId = DB::connection('mongodb')->table('users')->insertGetId($data);
        // $user = DB::connection('mongodb')->table('users')->where('_id',$userId)->first();
        $user = DB::connection('mongodb')->table('users')->find($userId);
        $userInfo = ['user' => $user, 'obj' => new UserMongodb($user)];
        return $userInfo;
    }

    public function getUserLastest() {
        $query = DB::connection('mongodb')->table('users')->orderByDesc('_id')->limit(1)->get();
        // $query = $this->collection->find([], ['sort' => ['_id' => -1], 'limit' => 1]);
        $lastestRecord = $query->toArray();
       
        return $lastestRecord;
    }

    public function getOneUser($username, $val) {
        $query = DB::connection('mongodb')->table('users')->where($username, $val);
        $user = $query->first();
        $userInfo = ['user_info' => $user, 'obj' => new UserMongodb($user)];
        
        return $userInfo;
    }

    public function getUsers($phone) {
        $query = DB::connection('mongodb')->table('users')->where('phone', '<>', $phone);
        $users = $query->get();
        return $users;
    }

}
