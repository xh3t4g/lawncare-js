import { handleRoute } from "./components/handleRoute";

function init() {
    window.addEventListener("DOMContentLoaded", handleRoute);

    window.addEventListener("popstate", handleRoute)
}

init();
