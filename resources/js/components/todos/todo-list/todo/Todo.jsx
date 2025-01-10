import React from "react";
import DeleteTask from "./DeleteTask";
import Task from "./Task";
import { motion } from "motion/react";

const Todo = ({ id, title, description, isCompleted }) => {
    return (
        <Animate className="flex justify-between items-center bg-white rounded-sm shadow-md py-4 px-2.5 cursor-pointer">
            <Task
                id={id}
                title={title}
                description={description}
                isCompleted={isCompleted}
            />
            <DeleteTask id={id} />
        </Animate>
    );
};

const Animate = ({ children, className }) => {
    const variants = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1, duration: 5000 },
    };

    return (
        <motion.li
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className={className}
        >
            {children}
        </motion.li>
    );
};

Todo.displayName = "Animate";

export default Todo;
