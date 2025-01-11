import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../../../library/Button";
import { createTodo } from "../../../../services/api/todo";

const Form = ({ closeModal }) => {
    const queryClient = useQueryClient();

    const onSuccess = () => {
        closeModal();
        queryClient.invalidateQueries({ queryKey: ["todos"] });
    };

    const todoMutation = useMutation({
        mutationFn: (data) => createTodo(data),
        onSuccess: onSuccess,
        onError: (error) => {
            console.error(error);
        },
    });

    const inputRef = React.useRef(null);

    const handleAddToDo = () => {
        const titleFiled = inputRef.current;

        if (titleFiled?.value.trim()) {
            const data = {
                title: titleFiled.value,
                is_completed: false,
            };
            todoMutation.mutate(data);
        } else {
            alert("Enter a title");
        }
    };

    return (
        <div className="space-y-4">
            <TaskTitleFiled
                ref={inputRef}
                onKeyDown={(e) => e.key === "Enter" && handleAddToDo()}
            />
            <AddTodoTask
                isLoading={todoMutation.isPending}
                onClick={handleAddToDo}
            />
        </div>
    );
};

const TaskTitleFiled = React.forwardRef((props, ref) => (
    <div>
        <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Task Title
        </label>

        <input
            type="text"
            ref={ref}
            {...props}
            autoFocus
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your task name"
            required
        />
    </div>
));

Form.displayName = "TaskTitleFiled";

const AddTodoTask = ({ isLoading, ...props }) => (
    <Button loading={isLoading} {...props}>
        Add
    </Button>
);

Form.displayName = "AddTodoTask";

export default Form;
