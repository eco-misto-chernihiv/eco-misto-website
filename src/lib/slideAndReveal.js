/**
 * TODO: Rewrite to use Class or Factory Functions
 */

/**
 * ANIMATIONS
 *
 * Fade Down
 * HTML attribute: data-fade-down
 * Function invoke property: fade-down
 */

/**
 * Slide and reveal animation on scroll
 * @param {String} animation Animation name
 */
function slideAndReveal(animation) {
  const sectionsToReveal = [
    ...document.querySelectorAll(`[data-${animation}]`),
  ];

  const incomingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute(`data-${animation}`, "visible");
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
    }
  );

  const outgoingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (
        !entry.isIntersecting &&
        entry.target.getBoundingClientRect().top > 0
      ) {
        entry.target.setAttribute(`data-${animation}`, "");
      }
    });
  });

  sectionsToReveal.forEach((section) => {
    incomingObserver.observe(section);
    outgoingObserver.observe(section);
  });
}

export default slideAndReveal;
