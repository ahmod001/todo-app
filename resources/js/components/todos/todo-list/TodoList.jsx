import React from "react";
import Todo from "./todo/Todo";

const TodoList = ({ list }) => {
    return (
        <ul className="space-y-3">
            {list.map((todo) => (
                <Todo
                    key={todo?.id}
                    id={todo?.id}
                    title={todo?.title}
                    description={todo?.description}
                    isCompleted={todo?.is_completed}
                />
            ))}
        </ul>
    );
};

export default TodoList;
