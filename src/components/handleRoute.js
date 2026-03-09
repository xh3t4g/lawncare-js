import { render } from "./render";
import { state } from "./state";

export function handleRoute() {
    const path = window.location.pathname;

    if (path === "/gallery") {
        state.currentPage = "gallery";
    }else {
        state.currentPage = "home"
    }

    render();
}


