<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class FriendRequests extends Model
{
    use HasFactory;

    public function getFriends($userId, $keyword = '') {
        $query = DB::connection('mongodb')->table('friend_requests')
                ->join('users', 'users.id', '=', 'friend_requests.receiver_id' );
        if($keyword != '') {
            $query = $query->where('keyword', 'LIKE', '%'.$keyword.'%');
        }
        $data = $query->where([
            ['status', '<>', 0],
            ['users.id', $userId]
        ])
                ->get();
        echo "<pre>";
        print_r($query);
        echo "</pre>";
        die;
        return $data;
    }

    public function getFriendRequest($userId) {
        $query = DB::connection('mongodb')->table('friend_requests')
                ->join('users','friend_requests.receiver_id', '=', 'users.id')
                ->where('user_id', $userId)
                ->get();

                echo "<pre>";
                print_r($query);
                echo "</pre>";
                die;
        return $query;
    }
}
