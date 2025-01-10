import Button from "../../../library/Button";

const Form = () => {
    return (
        <form className="space-y-4">
            <TaskTitleFiled />
            <Button>Add</Button>
        </form>
    );
};

const TaskTitleFiled = ({ ...props }) => (
    <div>
        <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
        >
            Task Title
        </label>

        <input
            type="text"
            {...props}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your task name"
            required
        />
    </div>
);

Form.displayName = "TaskTitleFiled";

export default Form;
