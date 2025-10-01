import autoHideNav from "@/lib/autoHideNav.js";
import initSwiper from "../lib/swiper.js";
import initDialog from "../lib/dialog.js";

import { getURLAndSearchParams } from "@/lib/helpers.js";

document.addEventListener("astro:page-load", () => {
  /**
   * AUTOHIDE NAV ON SCROLL
   */
  autoHideNav("header", 400);

  /**
   * Initialize Swiper and Dialog
   */
  initSwiper();
  initDialog();

  /**
   * OPEN MODAL IF 'DONATE' OR 'PARTNERSHIP' PARAM SET
   */

  /**
   * Sets the appropriate radio button value within a dialog based on a URL parameter.
   *
   * @param {Object} options - The options object.
   * @param {HTMLDialogElement} options.dialog - The dialog element containing the radio buttons.
   * @param {string} options.param - The URL parameter name to check.
   * @param {URLSearchParams} options.params - The URL search parameters object.
   */
  function setRadioFromURLParam({ dialog, param, params }) {
    const value = params.get(param);
    if (!value) return;

    const radioInputs = [...dialog.querySelectorAll('input[type="radio"]')];

    radioInputs.forEach((input) => (input.checked = input.value === value));
  }

  /**
   * Handles opening a dialog and setting radio button based on URL parameters.
   */
  function handleURLParamDialog() {
    const { params } = getURLAndSearchParams();
    const param = ["donate", "partnership"].find((p) => params.has(p));

    if (!param) return;

    const dialog = document.querySelector(`[data-dialog='${param}']`);
    dialog.showModal();

    setRadioFromURLParam({ dialog, param, params });
  }

  handleURLParamDialog();
});

// document.addEventListener("astro:before-preparation", () => {
//   const videoDialog = document.querySelector(
//     "dialog[data-dialog='promo-video']"
//   );

//   if (videoDialog) {
//     const video = videoDialog.querySelector("video");
//     console.log(video);

//     video.pause();
//     video.removeAttribute("src");
//     video.load();
//   }
// });
