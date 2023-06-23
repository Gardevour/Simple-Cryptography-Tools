var closeModalBtn = document.querySelector("[btnCloseModal]");

document.querySelector("[btnOpenModal]").addEventListener("click", () => {
  document.querySelector("[rot13-dialog]").showModal();
});
