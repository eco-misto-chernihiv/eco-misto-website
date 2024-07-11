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

/**
 * Returns aspect ratio based on orientation
 * @param {String} orientation
 * @returns {String} Aspect ratio
 */
export function getRatio(orientation) {
  if (orientation === "landscape") {
    return "3:2";
  }

  if (orientation === "portrait") {
    return "3:4";
  }

  if (orientation === "square") {
    return "1:1";
  }

  if (orientation === "panoramic") {
    return "16:9";
  }
}

/**
 * Sort projects by publish date from newest to oldest
 * @param {Array} projects
 * @returns {Array} Sorted projects
 */
export function getSortedProjects(projects) {
  return [...projects].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/**
 * Get project index in a projects array
 * @param {Array} projects
 * @param {Object} project
 * @returns {Number} Index number
 */
export function getProjectIndex(projects, project) {
  return projects.findIndex((p) => p.id === project.id);
}
