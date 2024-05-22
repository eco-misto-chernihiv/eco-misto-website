import autoHideNav from "@/lib/autoHideNav.js";
import Modal from "../lib/modal.js";

const modalOverlays = document.querySelectorAll("[data-modal]");
const buttonModals = document.querySelectorAll("[data-open-modal]");

// Move all modals to the body element
document.addEventListener("DOMContentLoaded", () => {
  modalOverlays.forEach((modal) => {
    document.body.append(modal);
  });
});

// Loop through all modal overlays
modalOverlays.forEach((overlay, index) => {
  // Select modal element
  const modal = overlay.querySelector(".modal");

  // Initialize the modal
  Modal({
    modalElement: modal,
    buttonElement: buttonModals[index],
    type: "normal",
  });
});

autoHideNav("header", 400);
