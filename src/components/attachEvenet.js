import { navigate } from "./navigate";


export function attachEvent() {
    const goHome = document.querySelector('#goHome');
    const goGallety = document.querySelector('#goGallery');

    if (goHome) {
        goHome.addEventListener('click', () => navigate("/home"))
    }

    if (goGallety) {
        goGallety.addEventListener('click', () => navigate("/gallery"))
    }
}
