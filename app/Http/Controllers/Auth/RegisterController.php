<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request){
        $validator  = Validator::make($request->all(), [
            'firstName' => 'required|min:3|max:10',
            'familyName' => 'required|min:3|max:10',
            'email' => 'required|unique:users|email|max:255',
            'phoneNumber' => 'required|numeric|digits:10',
            'userName' => 'required|min:3',
            'password' => 'required|min:5|max:12',
        ]);
        if ($validator->fails()) {
            $existingEmailCheck = User::where('email', $request->email)->get();

            if($existingEmailCheck) {
                return response()->json([
                    'existingEmailCheck' => true
                ], 200);
            }
            abort(402);
        }


        $user = new User();
        $user->firstName = $request->firstName;
        $user->familyName = $request->familyName;
        $user->email = $request->email;
        $user->phoneNumber = $request->phoneNumber;
        $user->userName = $request->userName;
        $user->password = $request->password;
        $user->save();

        return response()->json([
            'user' => $user
        ], 200);
    }
}
