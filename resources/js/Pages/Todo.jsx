import React from "react";
import Todos from "../components/todos/Todos";
import TodoHeader from "../components/todo-header/TodoHeader";

const Todo = () => {
    return (
        <main className="bg-gray-50 min-h-screen">
            <section className="max-w-lg mx-auto py-10 px-4">
                <TodoHeader />
                <Todos />
            </section>
        </main>
    );
};

export default Todo;
