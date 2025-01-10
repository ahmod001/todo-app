import React from "react";
import Todo from "./todo/Todo";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodoList,
    });
    return (
        <ul>
            {data.map(({ id, title, description, is_completed }) => (
                <Todo
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    isCompleted={is_completed}
                />
            ))}
        </ul>
    );
};

export default TodoList;
