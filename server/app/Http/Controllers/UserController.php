<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $UsersList = User::with('course')->paginate(10);
        return response()->json([
            "success" => true,
            "data" => $UsersList,

        ], 200);
    }

    public function all()
    {

        $UsersList = User::all();
        return response()->json([
            "success" => true,
            "data" => $UsersList,

        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|max:255|unique:users'
        ]);
        return User::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $UsersList = User::with('course')->FindOrFail($id);
        return response()->json([
            "success" => true,
            "data" => $UsersList,

        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'name' => 'required'
        ]);

        $payload = $request->all();
        $User = User::FindOrFail($id);
        $User->update($payload);
        return response()->json([
            'success' => true,
            'data' => $User,
            'message' => 'User has been successfully updated.'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $User = User::findOrFail($id);
        $whatHappend = User::destroy($id);
        if ($whatHappend === 1) {
            return response()->json([
                'success' => true,
                'data' => $User,
                'message' => 'User has been deleted.'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User could not be deleted'
            ], 200);
        }
    }
}
