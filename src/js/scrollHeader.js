document.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector(".page-header");
   const hero = document.querySelector(".section-page");

   window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let currentWidth = window.innerWidth;

     
      if (currentWidth >= 768)
      {
         if (scrollTop >= 70) {
            header.classList.add("scroll-header");
            hero.style.marginTop = `${header.offsetHeight}px`;
          } else {
         header.classList.remove("scroll-header");
        hero.style.marginTop = `0px`;    
      }
         
      } else {
   
         if (scrollTop >= 120) {
           header.classList.add("scroll-header");
           hero.style.marginTop = `${header.offsetHeight}px`;
         } else {
           header.classList.remove("scroll-header");
           hero.style.marginTop = `0px`;
         }
      }
     
   });
});