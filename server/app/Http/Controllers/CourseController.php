<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $CourseList = Course::paginate(5);
        return response()->json([
            "success" => true,
            "data" => $CourseList,

        ], 200);
    }

    public function all()
    {

        $CourseList = Course::all();
        return response()->json([
            "success" => true,
            "data" => $CourseList,

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
        $request->validate([
            'title' => 'required|max:255'
        ]);
        return Course::create($request->all());
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
        $CourseList = Course::FindOrFail($id);
        return response()->json([
            "success" => true,
            "data" => $CourseList,

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
            'title' => 'required'
        ]);

        $payload = $request->all();
        $Course = Course::FindOrFail($id);
        $Course->update($payload);
        return response()->json([
            'success' => true,
            'data' => $Course,
            'message' => 'Course has been successfully updated.'
        ], 200);
    }

    /**
     * Assign Course to user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function assignCourse(Request $request, $id)
    {
        //
    }

    /**
     * Assign Course to user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function resultsCourseUser(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $Course = Course::findOrFail($id);
        $whatHappend = Course::destroy($id);
        if ($whatHappend === 1) {
            return response()->json([
                'success' => true,
                'data' => $Course,
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
