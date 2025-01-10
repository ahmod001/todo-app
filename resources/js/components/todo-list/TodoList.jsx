import React from "react";
import Todo from "./todo/Todo";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoList } from "../../services/api/todo";

const TodoList = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodoList,
    });

    if (isLoading) return <LoadingSkeleton />;

    return (
        <ul className="space-y-3">
            {data?.data.map((todo) => (
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

const LoadingSkeleton = () => (
    <ul className="space-y-3 ">
        {[1, 2, 4, 5, 6].map((i) => (
            <li
                key={i}
                className="bg-gray-50 rounded-sm py-8 px-2.5 shadow-md"
            ></li>
        ))}
    </ul>
);
TodoList.displayName = "LoadingSkeleton";

export default TodoList;
