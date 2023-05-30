<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\PersonalAccessTokens;
class CheckUserLoginApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
       
        $accessToken = new PersonalAccessTokens();
        $headers = $request->header();
        // return response()->json($headers['authorization'][0]);
        $token = $headers['authorization'][0];
        $result = $accessToken->checkExistToken($token);
       
        if($result) {
            return $next($request);
        }else {
            return response('Unauthorized', 401);
        }

    }
}
