import React from "react";
import Button from "../../../library/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../../../services/api/todo";

const DeleteTask = ({ id }) => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (id) => deleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
        onError: ({ data }) => {
            console.error(data);
        },
    });

    const handleDelete = () => {
        mutate(id);
    };

    return (
        <Button
            loading={isPending}
            variant="danger"
            className="ms-5"
            onClick={handleDelete}
        >
            Delete
        </Button>
    );
};

export default DeleteTask;
