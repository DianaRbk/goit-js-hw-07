import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

function generateGalleryItemMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `;
  }).join("");
}

function openModal(imageUrl) {
  const modal = basicLightbox.create(
    `<img src="${imageUrl}">`,
    {
      onShow: () => {
       
      },
      onClose: () => {
       
      }
    }
  );
  modal.show();

  window.addEventListener("keydown", closeModalOnEscape);

  function closeModalOnEscape(e) {
    if (e.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", closeModalOnEscape);
    }
  }
}

function handleGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imageUrl = e.target.dataset.source;
  openModal(imageUrl);
}

const galleryItemMarkup = generateGalleryItemMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryItemMarkup);

gallery.addEventListener("click", handleGalleryClick);












