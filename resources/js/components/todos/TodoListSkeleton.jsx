import React from "react";

const TodoListSkeleton = () => {
    return (
        <ul className="space-y-3 ">
            {[1, 2, 4, 5, 6].map((i) => (
                <li key={i}>
                    <TaskSkeleton />
                </li>
            ))}
        </ul>
    );
};

const TaskSkeleton = () => (
    <div className="bg-gray-200 animate-pulse rounded-sm py-8 px-2.5 "></div>
);
TodoListSkeleton.displayName = "TaskSkeleton";
export default TodoListSkeleton;
