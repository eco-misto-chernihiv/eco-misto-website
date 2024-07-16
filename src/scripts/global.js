import autoHideNav from "@/lib/autoHideNav.js";
import Modal from "../lib/modal.js";
import "../lib/swiper.js";

/**
 * MODALS
 */
const modalOverlays = document.querySelectorAll("[data-modal]");
const buttonModals = document.querySelectorAll("[data-open-modal]");

// Move all modals to the body element
document.addEventListener("DOMContentLoaded", () => {
  modalOverlays.forEach((modal) => {
    document.body.append(modal);
  });
});

// TODO: Refactor modals to use native dialog html element
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

/**
 * AUTOHIDE NAV ON SCROLL
 */
autoHideNav("header", 400);
