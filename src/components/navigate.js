import { render } from "./render";
import { state } from "./state";

export function navigate(page) {
    state.currentPage = page;
    render();
}
