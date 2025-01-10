import React from "react";
import AddTodo from "./add-todo/AddTodo";

const TodoHeader = () => {
    return (
        <header className="flex justify-between items-center pe-2.5 mb-5  ">
            <Title />
            <AddTodo />
        </header>
    );
};

const Title = () => <h1 className="text-3xl font-bold mb-4">Todo List</h1>;
TodoHeader.displayName = "Title";

export default TodoHeader;
