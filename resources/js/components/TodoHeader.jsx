import React from "react";
import Button from "./library/Button";

const TodoHeader = () => {
    return (
        <header className="flex justify-between items-center pe-2.5 mb-5  ">
            <Title />
            <AddTask />
        </header>
    );
};

const Title = () => <h1 className="text-3xl font-bold mb-4">Todo List</h1>;
TodoHeader.displayName = "Title";

const AddTask = ({ ...props }) => <Button {...props}>Add</Button>;
TodoHeader.displayName = "AddTask";

export default TodoHeader;
