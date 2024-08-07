import { getURLAndSearchParams, updateBrowserHistory } from "./helpers.js";

const dialogs = document.querySelectorAll("dialog");
const mobileMenuDialog = document.querySelector("#mobile-menu");
const donateDialog = document.querySelector("#donate");
const partnershipDialog = document.querySelector("#partnership");

const mobileMenuButton = document.querySelector("[data-open-mobile-menu]");
const donateButtons = [...document.querySelectorAll("[data-open-donate]")];
const partnershipButtons = [
  ...document.querySelectorAll("[data-open-partnership]"),
];

/**
 * Helpers
 */

/**
 * Calculates the width of the browser's vertical scrollbar.
 *
 * @returns {number} The width of the scrollbar in pixels.
 */
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Set vertical scrollbar width as custom property on html element
 */
function setScrollBarWidth() {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    scrollbarWidth + "px"
  );
}

/**
 * Close dialog
 */
dialogs.forEach((dialog) => {
  const closeButton = dialog.querySelector("button[data-close-dialog]");

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // Close modal when click on overlay
  dialog.addEventListener("click", (event) => {
    if (event.target.nodeName === "DIALOG") {
      dialog.close();
    }
  });

  // Remove donate id from url params on dialog close
  dialog.addEventListener("close", () => {
    const { url, params } = getURLAndSearchParams();

    // Remove dialog id as param from the url and set new url
    params.delete(dialog.id);
    url.search = params.toString();

    updateBrowserHistory(url);
  });
});

/**
 * Event Listeners
 */

document.addEventListener("DOMContentLoaded", setScrollBarWidth);

mobileMenuButton.addEventListener("click", () => {
  mobileMenuDialog.showModal();
});

donateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Close mobile menu dialog if opened
    if (mobileMenuDialog.hasAttribute("open")) {
      mobileMenuDialog.close();
    }

    donateDialog.showModal();

    const { url, params } = getURLAndSearchParams();
    const radioValue = donateDialog.querySelector(
      'input[type="radio"]:checked'
    ).value;

    // Set new param as dialog id and update url
    params.set(donateDialog.id, radioValue);
    url.search = params.toString();

    updateBrowserHistory(url);
  });
});

partnershipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    partnershipDialog.showModal();

    const { url } = getURLAndSearchParams();

    // Create new url with partnership param
    const modifiedUrl = `${url.origin}${url.pathname}?${partnershipDialog.id}`;

    updateBrowserHistory(modifiedUrl);
  });
});
