<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request){
        $validator  = Validator::make($request->all(), [
            'userName' => 'required|min:3',
            'password' => 'required|min:5',
        ]);
        if ($validator->fails()) {
            abort(402);
        }

        $user = User::where('userName', $request->userName)->where('password',$request->password)->first();
        if($user){
            return response()->json([
                'user' => $user,
            ], 200);
        }
        return response()->json([
            'userNotExist' => true,
        ], 200);
    }
}
