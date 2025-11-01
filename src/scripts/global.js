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

    // Grab all radio inputs
    const radioInputs = [...dialog.querySelectorAll('input[type="radio"]')];

    // Check if radio input with value exists
    const targetRadio = radioInputs.find((input) => input.value === value);

    if (targetRadio) {
      // If the radio button exists, set it as checked
      radioInputs.forEach((input) => (input.checked = input.value === value));
    } else {
      // If the radio button doesn't exist (e.g., 'subscribe' on EN version),
      // ensure the first available radio button is checked (typically 'pay')
      if (radioInputs.length > 0) {
        radioInputs[0].checked = true;
      }
    }
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
