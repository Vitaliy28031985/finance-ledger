import { galleryItems } from "./db/galleryItems";
import { helpers } from "./helpers/helpers";

const galleryModal = document.querySelector(".backdrop");
const casesImg = document.getElementById("cases-img");
const loader = document.querySelector(".loader");

const galleryItem = document.querySelectorAll(".gallery-item");
const closeGalleryModal = document.getElementById("close");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

 galleryModal.classList.add("is-hidden");

// function close and open modal
const openModal = (e) => {
  loader.classList.remove("is-hidden");
  galleryModal.classList.remove("is-hidden");

  for (let i = 0; i < galleryItems.length; i += 1) {
    if (galleryItems[i].id === e.currentTarget.id) {
      casesImg.src = galleryItems[i].linkX1;
    }
  }

  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 1000); 
};

const closeModal = () => {
   
  galleryModal.classList.add("is-hidden"); 
}

//function changes img

const prevItem = () => {
  loader.classList.remove("is-hidden");
  helpers.counterDecrement(helpers.count, galleryItems.length - 1);
  casesImg.src = galleryItems[helpers.count].linkX1;

  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 1000); 
};

const nextItem = () => {
  loader.classList.remove("is-hidden");
  helpers.counterIncrement(galleryItems.length - 1);
  casesImg.src = galleryItems[helpers.count].linkX1;

  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 1000); 
};

// function keyboard

const handleKeyDown = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
  if (e.code === "ArrowLeft") {
    prevItem();
  }
  if (e.code === "ArrowRight") {
   nextItem();
  }
};


//Listeners

galleryItem.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeGalleryModal.addEventListener("click", closeModal);

prevButton.addEventListener("click", prevItem);
nextButton.addEventListener("click", nextItem);

window.addEventListener("keydown", handleKeyDown);

galleryModal.addEventListener("click", (e) => {
   if (e.target === e.currentTarget) {
     closeModal(); 
   }
});