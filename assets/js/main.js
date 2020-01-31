document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#btn-register").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });
});

const switchModal = () => {
  console.log("openModal");
  document.querySelector(".modal").classList.toggle("hidden");
};
