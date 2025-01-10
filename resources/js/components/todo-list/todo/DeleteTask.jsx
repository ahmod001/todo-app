import React from "react";

const DeleteTask = ({ id }) => {
    const handleDelete = () => {
        console.log(id);
    };
    return (
        <button
            onClick={handleDelete}
            className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Delete
        </button>
    );
};

export default DeleteTask;
