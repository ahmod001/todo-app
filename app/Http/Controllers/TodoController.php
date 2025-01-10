<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Traits\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TodoController extends Controller
{
    use Response;


    public function show()
    {
        return Inertia::render('Todo');
    }

    public function index()
    {
        $todoList = Todo::paginate(10);

        return response()->json($todoList);
    }

    public function todoById(Todo $todo)
    {
        return $this->success(data: $todo);
    }

    public function create(Request $request)
    {
        $validate = Validator::make($request->input(), [
            'title' => 'required',
            'description' => 'string|nullable',
            'is_completed' => 'required|boolean',
        ]);

        if ($validate->fails())
            return response()->json($validate->errors(), 400);


        Todo::create($request->input());

        return $this->success('Todo created successfully');
    }

    public function update(Todo $todo, Request $request)
    {
        $validate = Validator::make($request->input(), [
            'title' => 'required',
            'description' => 'string|nullable',
            'is_completed' => 'required|boolean',
        ]);

        if ($validate->fails())
            return response()->json($validate->errors(), 400);

        $todo->update($request->input());
        return $this->success('Todo updated successfully');
    }

    public function delete(Todo $todo)
    {
        $todo->delete();
        return $this->success('Todo deleted successfully');
    }
}
