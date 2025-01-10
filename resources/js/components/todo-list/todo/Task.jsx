import React from "react";

const Task = ({ id, task, description, isCompleted }) => {
    const handleCompleteTask = () => {};

    return (
        <span
            className={`flex-1 ${true ? "line-through text-gray-500" : ""}`}
            onClick={handleCompleteTask}
        >
            {{ title }}
        </span>
    );
};

export default Task;
