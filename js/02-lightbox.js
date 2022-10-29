import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"

const lightboxMarkup = galleryItems.map(({preview, original,description}) =>
`
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')

const galleryList = document.querySelector('.gallery')
galleryList.insertAdjacentHTML('beforeend', lightboxMarkup)

galleryList.addEventListener("click", onGalleryClick)

function onGalleryClick(evt){
    // console.dir(evt.target.nodeName)
if (!evt.target.nodeName==='IMG'){
    return
} else {
    evt.preventDefault()
    
    console.log(SimpleLightbox)
    // console.dir(evt.target)
new SimpleLightbox('.gallery a', { captionDelay:250, captionsData:"alt" });

    // let gallery = new SimpleLightbox('.gallery a');
    // gallery.on('show.simplelightbox', function () {
    //     // Do something…
    // });
        // var lightbox = $('.gallery a').simpleLightbox({ /* options */ });

}
}

document.addEventListener(closed.simplelightbox, onClose)

function onClose()
{
    console.log("LB closed")
    alert("LB closed")
}