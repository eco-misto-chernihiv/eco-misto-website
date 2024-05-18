const defaults = {
  buttonElement: "",
  modalElement: "",
  type: "normal",
  afterOpen() {},
};

/**
 * Gets keyboard-focusable elements within a specified element
 * @param {HTMLElement} [element=document] element
 * @returns {Array}
 */
function getKeyboardFocusableElements(element = document) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    ),
  ].filter(
    (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
  );
}

/**
 * Get iframe or video element, within desired element
 * @param {HTMLElement} element
 * @returns {HTMLElement} Iframe or video element
 */
function getVideoElement(element) {
  return element.querySelector("iframe") || element.querySelector("video");
}

/**
 * Copying properties from one object to another (including Getters and Setters)
 * @param  {...any} sources
 * @returns {Object} Result of the mix
 */
function mix(...sources) {
  const result = {};
  for (const source of sources) {
    const props = Object.keys(source);
    for (const prop of props) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop);
      Object.defineProperty(result, prop, descriptor);
    }
  }
  return result;
}

function BaseModal(settings) {
  /**
   * Variables
   */
  const { modalElement } = settings;
  const overlayElement = modalElement.parentElement;
  const contentElement = modalElement.querySelector(".modal__content");

  /**
   * Helper functions
   */

  /**
   * Trap focus within modal window
   * @param {Object} event
   */
  function trapFocus(event) {
    // Select all focusable elements inside modal
    const focusables = getKeyboardFocusableElements(modalElement);
    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    // Directs to first focusable element
    if (
      document.activeElement === lastFocusable &&
      event.key === "Tab" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      // Return focus to the first focusable element
      firstFocusable.focus();
    }

    // Directs to the last focusable element
    if (
      document.activeElement === firstFocusable &&
      event.key === "Tab" &&
      event.shiftKey
    ) {
      event.preventDefault();
      // Return focus to the first focusable element
      lastFocusable.focus();
    }
  }

  /**
   * Methods
   */

  const modal = {
    get siblingElements() {
      return [...overlayElement.parentElement.children].filter(
        (element) => element !== overlayElement
      );
    },

    get isOpen() {
      return overlayElement.classList.contains("is-open");
    },

    get scrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
    },

    setScrollBarWidth() {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        modal.scrollbarWidth + "px"
      );
    },

    hideSiblingElements() {
      modal.siblingElements.forEach((element) =>
        element.setAttribute("aria-hidden", true)
      );
    },

    showSiblingElements() {
      modal.siblingElements.forEach((element) =>
        element.removeAttribute("aria-hidden")
      );
    },

    disableScroll() {
      const scrollBarWidth = modal.scrollbarWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    },

    enableScroll() {
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "";

      // Remove transition animation
      overlayElement.removeEventListener("transitionend", modal.enableScroll);
    },

    open() {
      overlayElement.classList.add("is-open");

      // Callback function after opening the modal
      settings.afterOpen();

      const focusableElements = getKeyboardFocusableElements(contentElement);

      // If focusable elements exists focus on the 1st one
      if (focusableElements[0]) focusableElements[0].focus();

      // Trap focus inside modal
      document.addEventListener("keydown", trapFocus);

      // Hide elements from SR
      modal.hideSiblingElements();

      // Disable page scrolling
      modal.disableScroll();
    },

    close() {
      overlayElement.classList.remove("is-open");

      // Remove trap focus listener
      document.removeEventListener("click", trapFocus);

      // Show elements for SR
      modal.showSiblingElements();

      // Enable page scrolling, when animation ends
      overlayElement.addEventListener("transitionend", modal.enableScroll);

      // Get iframe or video element, within a modal
      const videoElement = getVideoElement(contentElement);
      if (!videoElement) return;

      // If videoElement is iframe, reset src
      if (videoElement instanceof HTMLIFrameElement) {
        const src = videoElement.src;
        videoElement.src = src;
      }

      // If videoElement is video, set video on pause
      if (videoElement instanceof HTMLVideoElement) {
        videoElement.pause();
      }
    },
  };

  // Return modal methods
  return modal;
}

function UserTriggeredModal(settings) {
  const base = BaseModal(settings);
  const { buttonElement } = settings;

  // Overwrite base methods
  const modal = mix(base, {
    open() {
      // Call open from base modal
      base.open();

      // Announce to SR that modal is opened
      buttonElement.setAttribute("aria-expanded", true);
    },
    close() {
      // Call close from base modal
      base.close();

      // Tell SR that the modal is closed
      buttonElement.setAttribute("aria-expanded", false);

      // Bring back focus to a button that opens modal
      buttonElement.focus();
    },
  });

  /**
   * Event Listeners
   */

  buttonElement.addEventListener("click", () => {
    modal.open();
  });

  return modal;
}

function TimedModal(settings) {
  const modal = BaseModal(settings);

  setTimeout(() => {
    modal.open();
  }, settings.delayBeforeOpening);

  return modal;
}

function ScrollBasedModal(settings) {
  const base = BaseModal(settings);
  const { scrollBeforeOpening } = settings;

  function showModal() {
    // Get current scroll position
    const currentScroll = window.scrollY;

    // Open modal after scrolling x amount
    if (currentScroll > scrollBeforeOpening) {
      modal.open();
    }
  }

  // Overwrite base methods
  const modal = mix(base, {
    close() {
      base.close();

      // Remove event listener after closing the modal once
      window.removeEventListener("scroll", showModal);
    },
  });

  /**
   * Event Listeners
   */

  // Show modal after scrolling x amount
  window.addEventListener("scroll", showModal);

  return modal;
}

export default function Modal(settings) {
  /**
   * Overwrite defaults with user settings
   */
  settings = Object.assign({}, defaults, settings);

  const { type } = settings;

  const { modalElement } = settings;
  const overlayElement = modalElement.parentElement;
  const closeButtonElement = modalElement.querySelector(".jsModalClose");

  let modal;

  switch (type) {
    case "normal":
      modal = UserTriggeredModal(settings);
      break;
    case "timed":
      modal = TimedModal(settings);
      break;
    case "scroll":
      modal = ScrollBasedModal(settings);
      break;
  }

  /**
   * Event Listeners
   */

  document.addEventListener("DOMContentLoaded", modal.setScrollBarWidth);

  closeButtonElement.addEventListener("click", () => {
    modal.close();
  });

  // Close modal when click on overlay
  overlayElement.addEventListener("click", (event) => {
    if (!event.target.closest(".modal")) {
      modal.close();
    }
  });

  // Close modal on Esc
  document.addEventListener("keydown", (event) => {
    if (modal.isOpen && event.key === "Escape") {
      modal.close();
    }
  });
}
