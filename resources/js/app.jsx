import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import ReactQuery from "./services/@tanstack/react-query/ReactQuery";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ReactQuery>
                <App {...props} />
            </ReactQuery>
        );
    },
});
