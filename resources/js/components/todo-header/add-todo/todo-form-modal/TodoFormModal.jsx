import { AnimatePresence, motion } from "motion/react";
import Title from "./Title";
import Form from "./Form";
import CloseModal from "./CloseModal";
const TodoFormModal = ({ open, closeModal }) => {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Animate className="bg-white py-6 px-4 rounded-md shadow-lg  sm:max-w-sm max-w-xs w-full">
                        <header className="flex justify-between items-start mb-3">
                            <Title />
                            <CloseModal onClick={closeModal} />
                        </header>

                        <Form closeModal={closeModal}/>
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
