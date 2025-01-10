import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodoList } from "../../services/api/todo.js";
import TodoListSkeleton from "./TodoListSkeleton.jsx";
import TodoList from "./todo-list/TodoList.jsx";

const Todos = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodoList,
    });

    if (isLoading) return <TodoListSkeleton />;
    return <TodoList list={data?.data} />;
};

export default Todos;
