import { attachEvent } from "./attachEvenet";
import { GalleryPage } from "./GalleryPage";
import { HomePage } from "./HomePage";
import { state } from "./state";

export function render() {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    if (state.currentPage === 'home') {
        app.innerHTML = HomePage();
    }
    
    if (state.currentPage === 'gallery') {
        app.innerHTML = GalleryPage();
    }

    attachEvent();
}
