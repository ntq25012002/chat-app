<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\UserMongodb as User;
use App\Models\PersonalAccessTokens;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    protected $user;
    protected $personalAccessTokens;
    public function __construct(User $user, PersonalAccessTokens $personalAccessTokens) {
        $this->user = $user;
        $this->personalAccessTokens = $personalAccessTokens;
    }

    public function register(Request $request) {
        $dataUser = array_map(function($item) {
            if($item == null) {
                $item = '';
            }else {
                $item = trim($item);
            }
            return $item;
        }, $request->all());

        $avatar = $this->uploadImage($request);

        if($avatar) {
            $dataUser['avatar'] = $avatar['image_url'];
        }

        $dataUser['password'] = Hash::make($dataUser['password']);
        $dataUser['created_at'] = time();
        $userInfo = $this->user->saveUser($dataUser);
      
        $token = hash('sha256',Str::random(40));
        $dataToken = [
            'name' => 'api-token',
            'token' => $token,
            'abilities' => ['*'],
            'tokenable_id' => $userInfo['user']['_id'],
            'tokenable_type' => get_class($userInfo['obj']),
            'created_at' =>  time(),
        ];
        $accsessToken = $this->personalAccessTokens->insertAccessToken($dataToken);
        // $this->collection->updateOne(['_id' => $user->id], ['$set' => ['api_token' => $token]]);
        if($userInfo) {
            return response()->json([
                'user' => $userInfo['user'],
                'token' => $token,
                'status' => 200
            ]);
        }
        return response()->json(['error' => 'Error register user', 'status' => 500], 500);
    }

    public function login(Request $request) {
        //  kiểm tra người dùng đã nhập email hay số điện thoại
        $loginType = filter_var($request->input('username'), FILTER_VALIDATE_EMAIL ) ? 'email' : 'phone'; 

        $request->merge([
            $loginType => $request->input('username')
        ]);

        // $credentials = $request->validate([
        //     $loginType => $loginType=='email' ? 'required|email' : 'required|phone',
        //     'password' => 'required',
        // ]); 
        $credentials = [
            $loginType => $request->username,
            'password' => $request->password
        ];
      
        $user = $this->user->getOneUser($loginType, trim($request->username));
        
        // đặt đặt email đểm tra người dùng đặt thoại
        if($user && Hash::check(trim($request->password),$user['user_info']['password'])) {
            $token = hash('sha256',Str::random(40));
            $dataToken = [
                'name' => 'api-token',
                'token' => $token,
                'abilities' => ['*'],
                'tokenable_id' => $user['user_info']['_id'],
                'tokenable_type' => get_class($user['obj']),
                'created_at' =>  time(),
            ];
            $accsessToken = $this->personalAccessTokens->insertAccessToken($dataToken);
            // Auth::login($user);
            return response()->json([
                'user' => $user['user_info'],
                'token' => $token,
                'status' => 200
            ]);
        }
        // if (Auth::attempt($credentials)) {
        //     $user = Auth::user();
        //     // $token = $user->createToken('authToken')->accessToken;
        //     // $token = $user->createToken('api-token')->plainTextToken;
        //     $token = hash('sha256',Str::random(40));
        //     $dataToken = [
        //         'name' => 'api-token',
        //         'token' => $token,
        //         'abilities' => ['*'],
        //         'tokenable_id' => $user['user_info']['_id'],
        //         'tokenable_type' => get_class($user['obj']),
        //         'created_at' =>  time(),
        //     ];
        //     $accsessToken = $this->personalAccessTokens->insertAccessToken($dataToken);
        //     return response()->json([
        //         'user' => $user,
        //         'token' => $token,
        //         'status' => 200
        //     ]);
        //     // return response()->json(['token' => $token], 200);
        // } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        // }
    }

    public static function uploadImage($request, $storedImage='public/images', $inputName = 'avatar') {
        if($request->hasFile($inputName)){
            $file = $request->file($inputName);
            // $fileNameOriginal = $file->getClientOriginalName();
            $fileNameHash = time() . '.' .$file->getClientOriginalExtension();
            $filePath = $file->storeAs($storedImage,$fileNameHash);
            $image = [
                'image_url' => Storage::url($filePath)
            ];

            return $image;
        }
        return false;
    }
}
