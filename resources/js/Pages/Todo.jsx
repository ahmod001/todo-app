import React from "react";
import TodoList from "../components/todo-list/TodoList";
import TodoHeader from "../components/TodoHeader";

const Todo = () => {
    return (
        <main className="bg-gray-50">
            <section className="max-w-lg mx-auto py-10 px-4">
                <TodoHeader />
                <TodoList />
            </section>
        </main>
    );
};

export default Todo;
