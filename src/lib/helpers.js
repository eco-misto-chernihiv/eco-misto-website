export function getBreakpoins(prefix, prop) {
  return typeof prop === "object"
    ? {
        [`default:${prefix}-${prop.default}`]: prop.default,
        [`tablet:${prefix}-${prop.tablet}`]: prop.tablet,
        [`laptop:${prefix}-${prop.laptop}`]: prop.laptop,
        [`desktop:${prefix}-${prop.desktop}`]: prop.desktop,
      }
    : { [`${prefix}-${prop}`]: prop };
}
