<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use App\Models\Skills;
use Illuminate\Http\Request;

class ControllerEmployees extends Controller
{
    private final function generalResponse($success, $data = null, $error = null){
        return array( 'success' => $success, 'data' => $data, 'error' => $error );
    }

    public final function getAll(){
        $data = Employees::all();
        $i = 0;
        foreach ( $data as $item ) {
            $skills = Skills::where('employee_id','=',$item->employee_id)->get();
            $data[$i]->skills = $skills;
            $i++;
        }
        return response()->json( $this->generalResponse( true, $data ) );
    }

    public final function saveEmployee(Request $request){
        $employee = new Employees();
        $employee->name = $request->json('name');
        $employee->email = $request->json('email');
        $employee->area = $request->json('area');
        $employee->birthday = $request->json('birthday');
        $employee->address = $request->json('address');
        if ( $employee->save() ){
            foreach ( $request->json('skills') as $skill ){
                $skillDB = new Skills();
                $skillDB->name = $skill['name'];
                $skillDB->employee_id = $employee->id;
                $skillDB->save();
            }
        }
        return response()->json( $this->generalResponse(true, $employee) );
    }
}
