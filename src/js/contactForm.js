const form = document.querySelector(".contact-page-form");
const emailError = document.getElementById("error");

emailError.classList.add("email-error");
form.addEventListener("submit", handleSubmit);

const changeInput = (e) => {
console.log(e.currentTarget.id);
};

function handleSubmit(e) {
   e.preventDefault();
  const {
    elements: { name, email },
  } = e.currentTarget;
   if (email.value === "") {
  emailError.classList.remove("email-error");        
     return;
  }
 emailError.classList.add("email-error");
 alert("Thanks for the contact! We will contact you.");
     e.currentTarget.reset();

}