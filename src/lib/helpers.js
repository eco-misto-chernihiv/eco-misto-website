/**
 * Creates breakpoints classes to use in class:list directive
 */
export function getBreakpoints(prefix, prop) {
  return typeof prop === "object"
    ? {
        [`default:${prefix}-${prop.default}`]: prop.default,
        [`tablet:${prefix}-${prop.tablet}`]: prop.tablet,
        [`laptop:${prefix}-${prop.laptop}`]: prop.laptop,
        [`desktop:${prefix}-${prop.desktop}`]: prop.desktop,
      }
    : { [`${prefix}-${prop}`]: prop };
}

/**
 * Replace symbols to double and single quotes
 * @param {String} title
 * @returns Parsed title
 */
export function parseTitle(title) {
  return title.replaceAll("&quot;", `"`).replaceAll("&#39;", `'`);
}
