import React, { useState } from "react";
import TriggerTodoFormModal from "./TriggerTodoFormModal";
import TodoFormModal from "./todo-form-modal/TodoFormModal";
import { AnimatePresence } from "motion/react";

const AddTodo = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <TriggerTodoFormModal onClick={() => setShowModal(true)} />
            <TodoFormModal open={showModal} closeModal={() => setShowModal(!true)} />
            
        </>
    );
};

export default AddTodo;
