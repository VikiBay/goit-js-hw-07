import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsEl = galleryItems.map(({preview,description,original}) => 
// `<li class="gallery__item">
// <img class="gallery__image"
// src="${preview}" 
// data-source="${original}"
// alt="${description}" 
// ></img>
// </li>`).join('')

`<div class="gallery__item">
<a class="gallery__link">
<img class="gallery__image"
src="${preview}" 
data-source="${original}"
alt="${description}" 
></img>
</a>
</div>`).join('')

const galleryDiv = document.querySelector(".gallery")
galleryDiv.insertAdjacentHTML("beforeend", galleryItemsEl)



galleryDiv.addEventListener("click", onGalleryDivClick)

let instance;

function onGalleryDivClick (evt) {
    if (!evt.target.nodeName==="IMG"){
        return
    }

    evt.preventDefault()
    const currentItem = evt.target;
    
    instance = basicLightbox.create(`
    <img src="${currentItem.dataset.source}" width="800" height="600">
    `)    
   

instance.show()

    }
document.addEventListener('keydown', onInstanceClick)
function onInstanceClick (evt) {
    if (evt.code === "Escape"){
    instance.close()}
}
// document.querySelector('.gallery__image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }
