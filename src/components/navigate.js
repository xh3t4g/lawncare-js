import { handleRoute } from "./handleRoute";

export function navigate(path) {
    history.pushState({}, "", path)
    handleRoute();
}
