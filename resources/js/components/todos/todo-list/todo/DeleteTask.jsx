import React from "react";
import Button from "../../../library/Button";

const DeleteTask = ({ id }) => {
    const handleDelete = () => {
        console.log(id);
    };
    return <Button variant="danger" className="ms-5"  onClick={handleDelete}>Delete</Button>;
};

export default DeleteTask;
