import { attachEvent } from "./attachEvenet";
import { GalleryPage } from "./GalleryPage";
import { HomePage } from "./HomePage";
import { renderGallery } from "./renderGallery";
import { state } from "./state";
import { images } from "./GalleryIMG";

export function render() {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    if (state.currentPage === 'home') {
        app.innerHTML = HomePage();
        import ('../css/index.css')
    }
    
    if (state.currentPage === 'gallery') {
        app.innerHTML = GalleryPage();
        import ('../css/gallery.css');

        renderGallery(images);
    }

    attachEvent();
}
