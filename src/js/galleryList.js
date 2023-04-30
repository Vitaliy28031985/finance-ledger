import { galleryItems } from "./db/galleryItems";

const galleryMarking = document.getElementById("gallery-list");

const galleryList = () => {
   const render = galleryItems
     .map(
       ({id, title, linkX1, linkX2 }) =>
         `<li class="gallery-item" id=${id}>
          <div>
            <img
            srcset="${linkX1}, ${linkX2}"
            src=${linkX1} alt=${title}" 
            />
          </div>
      </li>`
     )
     .join("");
   
   galleryMarking.insertAdjacentHTML("afterbegin", render);
};

galleryList();