import React from "react";
import DeleteTask from "./DeleteTask";
import Task from "./Task";

const Todo = ({ id, title, description, isCompleted }) => {
    return (
        <li className="flex justify-between items-center mb-2">
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
