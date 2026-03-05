export function renderGallery(images) {
    const list = document.querySelector('#gallery_list');
    list.innerHTML = '';

    images.forEach((src) => {

        let link_a = document.createElement('a');
        link_a.href = src;
        link_a.rel = 'noopener';

        let img_s = document.createElement('img');
        img_s.src = src;
        img_s.alt = '';

        link_a.appendChild(img_s);
        list.appendChild(link_a);
    })
}
