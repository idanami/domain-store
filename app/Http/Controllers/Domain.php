<?php

namespace App\Http\Controllers;

use App\Models\Domain as ModelsDomain;
use App\Models\User;
use Illuminate\Http\Request;

class Domain extends Controller
{
    public function checkDomainExists(Request $request){
        $domain = ModelsDomain::where('domain',$request->domain)->get();
        if(count($domain))
            return response()->json([
                'emailExist' => true
            ], 200);
        return response()->json([
            'emailExist' => false
        ], 200);
    }

    public function addDomain(Request $request){
        $user = User::find($request->userId);

        $domain = new ModelsDomain();
        $domain->domain = $request->domain;
        $user->domain()->save($domain);
        return response()->json([
            'newDomain' => true
        ], 200);
    }

    public function getDomainByUser($id){
        $user = User::find($id);
        return response()->json([
            'domain' => $user->domain()->get()
        ], 200);
    }

}
