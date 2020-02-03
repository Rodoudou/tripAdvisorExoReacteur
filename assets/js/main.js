document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btn-register").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });
  //###############################################
  //button du form
  const form = document.querySelector("form");
  form.addEventListener("submit", event => {
    /*  event.preventDefault(); */
    console.log("submit");
  });
  //####################################
});

//toggle for modal
const switchModal = () => {
  console.log("openModal");
  document.querySelector(".modal").classList.toggle("hidden");
};
