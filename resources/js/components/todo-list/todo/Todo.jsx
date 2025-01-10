import React from "react";
import DeleteTask from "./DeleteTask";
import Task from "./Task";

const Todo = ({ id, title, description, isCompleted }) => {
    return (
        <li className="flex justify-between items-center bg-white rounded-sm shadow-md py-4 px-2.5 cursor-pointer">
            <Task
                id={id}
                title={title}
                description={description}
                isCompleted={isCompleted}
            />
            <DeleteTask id={id} />
        </li>
    );
};

export default Todo;
