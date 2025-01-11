import React from "react";

const Button = ({
    children,
    className = "",
    variant = "primary",
    loading = false,
    ...props
}) => {
    const classList = `p-2 text-sm font-medium inline-flex justify-center gap-1 items-center rounded min-w-16 ${getTheme(
        variant
    )} ${className}`;

    if (loading)
        return (
            <button {...props} disabled className={classList}>
                <svg
                    className="animate-spin block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
                {children}
            </button>
        );

    return (
        <button {...props} className={classList}>
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
        case "ghost":
            return " bg-white shadow hover:bg-gray-50 text-gray-800";
        default:
            return "";
    }
}
export default Button;
