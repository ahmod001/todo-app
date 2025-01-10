import React from "react";

const Button = ({
    children,
    className = "",
    variant = "primary",
    ...props
}) => {
    return (
        <button
            {...props}
            className={
                "p-2 text-sm font-medium rounded min-w-16" +
                getTheme(variant) +
                " " +
                className
            }
        >
            {children}
        </button>
    );
};

function getTheme(variant) {
    switch (variant) {
        case "primary":
            return " bg-blue-500 hover:bg-blue-600 text-white";
        case "danger":
            return " bg-red-500 hover:bg-red-600 text-white";
        default:
            return "";
    }
}
export default Button;
