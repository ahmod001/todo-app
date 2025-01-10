import React from "react";

const Task = ({ id, title, description, isCompleted }) => {
    const handleCompleteTask = () => {};
    //     onClick={handleCompleteTask}
    return <Title isCompleted={isCompleted} >{title}</Title>;
};

const Title = ({ children, isCompleted }) => (
    <h4
        className={`flex-1 font-medium text-lg ${
            isCompleted ? "line-through text-gray-500" : ""
        }`}
    >
        {children}
    </h4>
);
Task.displayName = "Title";

export default Task;
