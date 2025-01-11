import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateTodo } from "../../../../services/api/todo";

const Task = ({ id, title, description, isCompleted }) => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: ({id, data}) => updateTodo(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleCompleteTask = () => {
        const data = {
            title: title,
            description: description,
            is_completed: true,
        };
        mutate({id, data});
    };

    return (
        <Title isCompleted={isCompleted} onClick={handleCompleteTask}>
            {title}
        </Title>
    );
};

const Title = ({ children, isCompleted, onClick }) => (
    <h4
        onClick={onClick}
        className={`flex-1 font-medium text-lg my-4 ms-2.5 ${
            isCompleted ? "line-through text-gray-500" : ""
        }`}
    >
        {children}
    </h4>
);
Task.displayName = "Title";

export default Task;
