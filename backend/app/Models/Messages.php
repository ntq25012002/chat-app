<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Messages extends Model
{
    use HasFactory;

    public function getMessages($senderId, $recieverId = null, $groupId = null ) {
        $query = DB::connection('mongodb')->table('messages')
                ->where('sender_id', $senderId);
        if ($recieverId) {
            $query = $query->where('receiver_id', $recieverId);
        }else if($groupId) {
            $query = $query->where('group_id', $groupId);
        }
        $data = $query->get();
        echo "<pre>";
        print_r($data);
        echo "</pre>";
        die;
        return $data;
    }

    public function insertMessage($data) {
        $messageId = DB::connection('mongodb')->table('users')->insertGetId($data);
        $message = DB::connection('mongodb')->table('users')->find($messageId);
        echo "<pre>";
        print_r($message);
        echo "</pre>";
        die;

        return $message;
    }
}
