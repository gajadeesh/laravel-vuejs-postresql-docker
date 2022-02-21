<?php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ResultsList = Result::with('user','course')->paginate(5);
        return response()->json([
            "success" => true,
            "data" => $ResultsList,

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
            'user_id' => 'required',
            'course_id' => 'required',
            'status' => 'required'
        ]);
        return Result::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $ResultList = Result::FindOrFail($id);

        return response()->json([
            "success" => true,
            "data" => $ResultList,

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
        $request->validate([
            'user_id' => 'required',
            'course_id' => 'required',
            'status' => 'required'
        ]);

        $payload = $request->all();
        $Result = Result::FindOrFail($id);
        $Result->update($payload);
        return response()->json([
            'success' => true,
            'data' => $Result,
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
        $Result = Result::findOrFail($id);
            $whatHappend = Result::destroy($id);
            if ($whatHappend === 1) {
                return response()->json([
                    'success' => true,
                    'data' => $Result,
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
