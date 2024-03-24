const buttonOpenModal = document.getElementById("button-open-modal");
const buttonCloseModal = document.getElementById("button-close-modal");
const modalParent = document.querySelector(".modal-parent");
const modalChild = document.querySelector(".modal-child");
buttonOpenModal.addEventListener("click", () => {
  modalParent.style.opacity = 1;
  modalParent.style.visibility = "visible";
  modalChild.style.top = "50%";
});
modalParent.addEventListener("click", () => {
  modalParent.style.opacity = 0;
  modalParent.style.visibility = "hidden";
  modalChild.style.top = "30%";
});
modalChild.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
buttonCloseModal.addEventListener("click", () => {
  modalParent.click();
});
