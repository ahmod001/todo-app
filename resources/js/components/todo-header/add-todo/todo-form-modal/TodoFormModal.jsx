import { AnimatePresence, motion } from "motion/react";
import Button from "../../../library/Button";
import Title from "./Title";
import Form from "./Form";
const TodoFormModal = ({ open, closeModal }) => {
    return (
        <AnimatePresence>
            {open && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <Animate className="bg-white p-6 rounded-lg shadow-lg max-w-96 w-full">
                        <Title />
                        <Form />
                    </Animate>
                </div>
            )}
        </AnimatePresence>
    );
};

const Animate = ({ children, className }) => {
    const variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, duration: 5000 },
    };

    return (
        <motion.div
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

TodoFormModal.displayName = "Animate";

export default TodoFormModal;
